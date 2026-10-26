import type { Contestant, NuggetPosition } from "./types";

export const contestants: Contestant[] = [
  {
    name: "MAYA 'THE MACHINE'",
    initials: "MM",
    note: "THE UNSTOPPABLE",
    score: 100,
    place: "01",
  },
  {
    name: "DAN 'DIP KING'",
    initials: "DK",
    note: "SAUCE STRATEGIST",
    score: 87,
    place: "02",
  },
  {
    name: "PRIYA 'CRUNCH'",
    initials: "PC",
    note: "SILENT BUT DEADLY",
    score: 64,
    place: "03",
  },
  {
    name: "LEO 'THE CASUALTY'",
    initials: "LC",
    note: "FELL AT NUGGET 23",
    score: 23,
    place: "04",
    failed: true,
  },
];

// Deliberate positions make the stack read as a heap instead of a column.
// The positions can later receive small seeded random offsets and rotations.
export const nuggetLayout: NuggetPosition[] = [
  { x: 0, y: 0, tilt: -8 },
  { x: 20, y: 1, tilt: 7 },
  { x: 40, y: 0, tilt: -4 },
  { x: 60, y: 2, tilt: 10 },
  { x: 80, y: 0, tilt: -6 },
  { x: 10, y: 13, tilt: 5 },
  { x: 30, y: 14, tilt: -11 },
  { x: 50, y: 13, tilt: 8 },
  { x: 70, y: 14, tilt: -6 },
  { x: 20, y: 27, tilt: 11 },
  { x: 40, y: 27, tilt: -5 },
  { x: 60, y: 27, tilt: 6 },
  { x: 40, y: 41, tilt: -8 },
  { x: 30, y: 56, tilt: 8 },
  { x: 50, y: 56, tilt: -3 },
];
