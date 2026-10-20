import { TrackVisual } from "@/components/TrackVisual";

/** Animated missing-gate motif; the hidden gates never resolve into a solution. */
export function CircuitMotif() {
  return <TrackVisual kind="circuit" />;
}
