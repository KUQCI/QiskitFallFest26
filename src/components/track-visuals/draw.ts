import type { TrackVisualKind } from "@/content/types";
import { trackVisualCopy } from "@/content/track-visuals";

export type Palette = { purple: string; sky: string; fg: string; muted: string; line: string; surface: string; font: string };
type Context = CanvasRenderingContext2D;
type Vector = [number, number, number];
const TAU = Math.PI * 2;

function line(g: Context, x: number, y: number, x2: number, y2: number, color: string, width = 1.5, alpha = 1) {
  g.save(); g.strokeStyle = color; g.lineWidth = width; g.globalAlpha = alpha;
  g.beginPath(); g.moveTo(x, y); g.lineTo(x2, y2); g.stroke(); g.restore();
}
function circle(g: Context, x: number, y: number, r: number, color: string, alpha = 1) {
  g.save(); g.fillStyle = color; g.globalAlpha = alpha;
  g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); g.restore();
}
function halo(g: Context, x: number, y: number, c: Palette, radius = 4) {
  circle(g, x, y, radius * 4, c.purple, .09);
  circle(g, x, y, radius * 2.4, c.purple, .2);
  circle(g, x, y, radius, c.fg);
}
function text(g: Context, value: string, x: number, y: number, c: Palette, color = c.muted, size = 22, align: CanvasTextAlign = "left") {
  g.font = `500 ${size}px ${c.font}`; g.textAlign = align; g.textBaseline = "middle"; g.fillStyle = color; g.fillText(value, x, y);
}

function circuit(g: Context, t: number, c: Palette) {
  [82, 166, 250].forEach((y, index) => {
    const gate = 174 + index * 124;
    text(g, `q${index}`, 34, y, c, c.muted, 23);
    line(g, 72, y, 582, y, c.line, 1.5, .65);
    const x = 74 + ((t / 3700 + index * .14) % 1) * 504;
    const near = Math.max(0, 1 - Math.abs(x - gate) / 75);
    g.save(); g.fillStyle = c.surface; g.strokeStyle = c.purple; g.lineWidth = 2;
    g.setLineDash([6, 6]); g.beginPath(); g.roundRect(gate - 27, y - 27, 54, 54, 8); g.fill(); g.stroke();
    g.restore();
    circle(g, gate, y, 36, c.purple, .04 + .09 * near);
    text(g, "?", gate, y + 1, c, c.purple, 30, "center");
    // The missing gate is never revealed; no actual competition circuit is reproduced.
    g.strokeStyle = c.purple; g.lineWidth = 1.5; g.strokeRect(550, y - 24, 48, 48);
    g.beginPath(); g.arc(574, y + 8, 13, Math.PI, TAU); g.stroke();
    line(g, 574, y + 8, 584, y - 10, c.purple);
    halo(g, x, y, c, 4);
    circle(g, 72, y, 3, c.purple);
  });
  for (let i = 0; i < 18; i++) {
    const height = 7 + 19 * (.5 + .5 * Math.sin(t / 800 + i * .8));
    g.globalAlpha = .25 + .55 * height / 26; g.fillStyle = c.purple;
    g.fillRect(142 + i * 20, 328 - height, 10, height);
  }
  g.globalAlpha = 1;
}

function qml(g: Context, t: number, c: Palette) {
  const L = 52, R = 590, T = 82, B = 304;
  const u = Math.min(1, (t % 8800) / 6400);
  const baseline = (s: number) => .27 + .34 * (1 - Math.exp(-4 * s));
  const quantum = (s: number) => .22 + .49 * (1 - Math.exp(-3 * s)) + .012 * Math.sin(s * 37) + .008 * Math.sin(s * 91);
  const x = (s: number) => L + s * (R - L);
  const y = (v: number) => B - v * (B - T);
  line(g, L, T, L, B, c.line); line(g, L, B, R, B, c.line);
  for (const v of [.25, .5, .75]) line(g, L, y(v), R, y(v), c.line, 1, .12);
  for (let s = 0; s <= u; s += .012) {
    if (quantum(s) > baseline(s)) line(g, x(s), y(baseline(s)), x(s), y(quantum(s)), c.purple, 2, .12);
  }
  for (const [fn, color, dashed] of [[baseline, c.muted, true], [quantum, c.purple, false]] as const) {
    g.save(); g.strokeStyle = color; g.lineWidth = dashed ? 2 : 3;
    if (dashed) g.setLineDash([8, 7]);
    g.beginPath();
    for (let i = 0; i <= 150; i++) { const s = u * i / 150; if (!i) g.moveTo(x(s), y(fn(s))); else g.lineTo(x(s), y(fn(s))); }
    g.stroke(); g.restore();
  }
  g.save(); g.setLineDash([7, 6]); line(g, 60, 35, 95, 35, c.muted, 2); g.restore();
  text(g, trackVisualCopy.qml.classical, 108, 35, c, c.muted, 19);
  line(g, 366, 35, 401, 35, c.purple, 3);
  text(g, trackVisualCopy.qml.quantum, 414, 35, c, c.purple, 19);
  halo(g, x(u), y(quantum(u)), c, 4);
}

function rotate(v: Vector, axis: Vector, angle: number): Vector {
  const length = Math.hypot(...axis), k = axis.map(value => value / length);
  const cos = Math.cos(angle), sin = Math.sin(angle), dot = k[0] * v[0] + k[1] * v[1] + k[2] * v[2];
  const cross = [k[1] * v[2] - k[2] * v[1], k[2] * v[0] - k[0] * v[2], k[0] * v[1] - k[1] * v[0]];
  return v.map((value, i) => value * cos + cross[i] * sin + k[i] * dot * (1 - cos)) as Vector;
}
const gates: { label: string; axis: Vector; angle: number }[] = [
  { label: "H", axis: [1, 0, 1], angle: Math.PI },
  { label: "S", axis: [0, 0, 1], angle: Math.PI / 2 },
  { label: "T", axis: [0, 0, 1], angle: Math.PI / 4 },
  { label: "X", axis: [1, 0, 0], angle: Math.PI },
  { label: "H", axis: [1, 0, 1], angle: Math.PI },
  { label: "Z", axis: [0, 0, 1], angle: Math.PI },
  { label: "S", axis: [0, 0, 1], angle: Math.PI / 2 },
  { label: "Y", axis: [0, 1, 0], angle: Math.PI },
];
const states: Vector[] = [[0, 0, 1]];
gates.forEach((gate, i) => states.push(rotate(states[i], gate.axis, gate.angle)));
function stateAt(t: number): Vector {
  const i = Math.min(gates.length, Math.floor(t / 1700));
  if (i === gates.length) return states[i];
  const p = Math.min(1, (t - i * 1700) / 1000);
  const eased = p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
  return rotate(states[i], gates[i].axis, gates[i].angle * eased);
}
function bloch(g: Context, time: number, c: Palette) {
  const radius = 146, cx = 320, cy = 216, angle = .6 + time * .00018, t = time % 15000;
  function project(v: Vector) {
    const x = v[0] * Math.cos(angle) - v[1] * Math.sin(angle);
    const y = v[0] * Math.sin(angle) + v[1] * Math.cos(angle);
    return [cx + x * radius, cy - (y * Math.sin(.35) + v[2] * Math.cos(.35)) * radius, (1 - (y * Math.cos(.35) - v[2] * Math.sin(.35))) / 2];
  }
  function path(points: Vector[], accent = false) {
    for (let i = 1; i < points.length; i++) {
      const a = project(points[i - 1]), b = project(points[i]);
      line(g, a[0], a[1], b[0], b[1], accent ? c.purple : c.line, accent ? 2.5 : 1, (accent ? .4 : .08) + .4 * (a[2] + b[2]) / 2);
    }
  }
  g.strokeStyle = c.line; g.lineWidth = 1.2; g.globalAlpha = .65;
  g.beginPath(); g.arc(cx, cy, radius, 0, TAU); g.stroke(); g.globalAlpha = 1;
  for (const latitude of [-60, -30, 0, 30, 60]) {
    const p = latitude * Math.PI / 180;
    path(Array.from({ length: 73 }, (_, i) => { const a = i * TAU / 72; return [Math.cos(p) * Math.cos(a), Math.cos(p) * Math.sin(a), Math.sin(p)]; }));
  }
  for (let longitude = 0; longitude < 180; longitude += 30) {
    const p = longitude * Math.PI / 180;
    path(Array.from({ length: 73 }, (_, i) => { const a = i * TAU / 72; return [Math.cos(a) * Math.cos(p), Math.cos(a) * Math.sin(p), Math.sin(a)]; }));
  }
  const north = project([0, 0, 1]), south = project([0, 0, -1]);
  line(g, north[0], north[1], south[0], south[1], c.line, 1.2, .6);
  [north, south].forEach(p => circle(g, p[0], p[1], 3, c.muted));
  text(g, "|0⟩", north[0] + 22, north[1] - 7, c, c.muted, 21);
  text(g, "|1⟩", south[0] + 22, south[1] + 9, c, c.muted, 21);
  const history = Array.from({ length: 220 }, (_, i) => stateAt(t * i / 219));
  path(history, true);
  const current = project(stateAt(t));
  line(g, cx, cy, current[0], current[1], c.purple, 3);
  halo(g, current[0], current[1], c, 5); circle(g, cx, cy, 3, c.fg);
  text(g, gates[Math.min(gates.length - 1, Math.floor(t / 1700))].label, cx, 31, c, c.purple, 30, "center");
}

function ctf(g: Context, t: number, c: Palette) {
  const progress = Math.min(1, (t % 11600) / 9000), ease = progress * progress * (3 - 2 * progress);
  g.strokeStyle = c.purple; g.lineWidth = 2; g.beginPath(); g.roundRect(230, 72, 164, 178, 8); g.stroke();
  text(g, trackVisualCopy.ctf.model, 312, 103, c, c.purple, 21, "center");
  for (let i = 0; i < 6; i++) {
    const target = 36 + 65 * (.5 + .5 * Math.sin(i * 2.1 + .8));
    g.fillStyle = c.purple; g.globalAlpha = .2; g.fillRect(246 + i * 23, 230 - target, 14, target);
    const h = Math.max(5, target * ease + (1 - ease) * 13 * Math.sin(t / 180 + i));
    g.globalAlpha = .4 + .6 * ease; g.fillRect(446 + i * 23, 230 - h, 14, h);
  }
  g.globalAlpha = 1;
  line(g, 434, 232, 594, 232, c.line);
  for (let i = 0; i < 5; i++) {
    const p = (t / 1500 + i / 5) % 1, y = 148 + 31 * Math.sin(i * 2);
    if (p < .52) halo(g, 60 + p / .52 * 170, y, c, 3);
    else if (p > .7) halo(g, 394 + (p - .7) / .3 * 45, y, c, 3);
  }
  text(g, trackVisualCopy.ctf.queries, 104, 277, c, c.muted, 20, "center");
  text(g, trackVisualCopy.ctf.outputs, 516, 277, c, c.muted, 20, "center");
  // Abstract masked cells and a flag icon only: never generate a flag value or secret.
  for (let i = 0; i < 16; i++) {
    g.fillStyle = i / 16 < progress ? c.purple : c.line; g.globalAlpha = i / 16 < progress ? .85 : .3;
    g.fillRect(68 + i * 25, 320, 15, 15);
  }
  g.globalAlpha = 1;
  line(g, 540, 340, 540, 303, c.purple, 2.5);
  g.strokeStyle = c.purple; g.beginPath(); g.moveTo(540, 304); g.bezierCurveTo(552, 295, 568, 318, 582, 306); g.lineTo(582, 326); g.bezierCurveTo(568, 338, 552, 315, 540, 324); g.stroke();
}

function media(g: Context, t: number, c: Palette) {
  const seconds = t / 1000, cycle = t % 9000;
  const sources = [[.3 + .2 * Math.cos(seconds * .31), .5 + .25 * Math.sin(seconds * .23)], [.7 + .2 * Math.cos(seconds * .27 + 1), .4 + .3 * Math.sin(seconds * .19 + 2)], [.5 + .35 * Math.sin(seconds * .17), .8 - .2 * Math.cos(seconds * .29)]];
  const sweep = cycle > 6000 && cycle < 7600 ? (cycle - 6000) / 1600 : -1;
  for (let row = 0; row < 14; row++) for (let col = 0; col < 26; col++) {
    const u = col / 25, v = row / 13;
    const distances = sources.map(p => Math.hypot(u - p[0], v - p[1]));
    const level = Math.round((((Math.sin(distances[0] * 26 - seconds * 2.2) + Math.sin(distances[1] * 22 - seconds * 1.7) + Math.sin(distances[2] * 30 - seconds * 2.6)) / 3 + 1) / 2) * 5) / 5;
    const binary = (cycle >= 7600 && cycle < 8600) || (sweep >= 0 && u < sweep);
    const size = binary ? (level >= .5 ? 20 : 5) : 20 * (.25 + .75 * level);
    g.fillStyle = c.purple; g.globalAlpha = binary ? (level >= .5 ? .95 : .25) : .25 + .7 * level;
    g.fillRect(34 + col * 22 + (20 - size) / 2, 26 + row * 22 + (20 - size) / 2, size, size);
  }
  g.globalAlpha = 1;
  if (sweep >= 0) line(g, 34 + sweep * 572, 24, 34 + sweep * 572, 334, c.fg, 1.5, .65);
}

/** Adapted from the supplied premiere's canvas visuals, without any slide copy/rules. */
export function drawTrackVisual(g: Context, kind: TrackVisualKind, time: number, colors: Palette) {
  g.lineCap = "round"; g.lineJoin = "round"; g.globalAlpha = 1; g.setLineDash([]);
  ({ circuit, qml, bloch, ctf, media })[kind](g, time, colors);
}
