"use client";

import { useEffect, useRef } from "react";

import { drawTrackVisual, type Palette } from "@/components/track-visuals/draw";
import type { TrackVisualKind } from "@/content/types";
import { trackVisualCopy } from "@/content/track-visuals";

/** Responsive canvas, with one complete still frame under reduced motion. */
export function TrackVisual({ kind }: { kind: TrackVisualKind }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const figureRef = useRef<HTMLElement>(null);
  const height = kind === "bloch" ? 420 : 360;

  useEffect(() => {
    const canvas = canvasRef.current, figure = figureRef.current;
    if (!canvas || !figure) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false, running = false, alive = true, frame = 0, lastTick = 0, lastDraw = 0, elapsed = 1800;
    let palette: Palette;

    function draw() {
      if (!alive || !canvas || !context) return;
      const width = canvas.clientWidth;
      if (!width) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const pixelWidth = Math.round(width * ratio), pixelHeight = Math.round(width * height / 640 * ratio);
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) { canvas.width = pixelWidth; canvas.height = pixelHeight; }
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.setTransform(canvas.width / 640, 0, 0, canvas.height / height, 0, 0);
      drawTrackVisual(context, kind, motion.matches ? 5200 : elapsed, palette);
    }
    function refresh() {
      if (!alive || !canvas) return;
      const style = getComputedStyle(document.documentElement);
      const color = (token: string) => style.getPropertyValue(`--c-${token}`).trim();
      palette = { purple: color("purple"), sky: color("sky"), fg: color("fg"), muted: color("fg-muted"), line: color("border-strong"), surface: color("surface"), font: style.getPropertyValue("--font-plex-mono").trim() || "monospace" };
      draw();
    }
    function tick(now: number) {
      if (!running) return;
      if (lastTick) elapsed += Math.min(80, now - lastTick);
      lastTick = now;
      if (now - lastDraw >= 1000 / 30) { draw(); lastDraw = now; }
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      if (!alive || !figure) return;
      cancelAnimationFrame(frame);
      running = visible && !document.hidden && !motion.matches;
      figure.dataset.motion = motion.matches ? "reduced" : running ? "running" : "paused";
      lastTick = 0;
      refresh();
      if (running) frame = requestAnimationFrame(tick);
    }
    const intersection = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }, { threshold: .05 });
    const resize = new ResizeObserver(refresh);
    const theme = new MutationObserver(refresh);
    intersection.observe(figure); resize.observe(canvas);
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    window.addEventListener("resize", refresh);
    void document.fonts.ready.then(() => { if (alive) refresh(); });
    sync();
    return () => {
      alive = false; running = false; cancelAnimationFrame(frame);
      intersection.disconnect(); resize.disconnect(); theme.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("resize", refresh);
    };
  }, [height, kind]);

  return (
    <figure ref={figureRef} className="track-visual" data-track-visual={kind} aria-hidden={kind === "qml" ? undefined : true}>
      <canvas ref={canvasRef} width={640} height={height} className="block h-auto w-full" style={{ aspectRatio: `640 / ${height}` }} aria-hidden="true" />
      {kind === "qml" ? <figcaption className="px-4 pb-4 text-xs leading-relaxed text-fg-muted">{trackVisualCopy.qml.caption}</figcaption> : null}
    </figure>
  );
}
