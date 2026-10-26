import type { Contestant, NuggetPosition } from "./components/types";

export const contestants: Contestant[] = [
  {
    name: "DAVE 'THE CHAMP'",
    initials: "DE",
    note: "GOT THERE FIRST. KEPT IT CLASSY",
    score: 69,
    timeTakenMinutes: 60,
    timestamp: "2026-03-03T12:00:00Z",
  },
  {
    name: "VLAD 'THE DUNK LORD'",
    initials: "VD",
    note: "69 NUGGETS, ZERO REGRETS",
    score: 69,
    timeTakenMinutes: 80,
    timestamp: "2026-10-20T12:00:00Z",
  },
  {
    name: "HUNTER 'THE CAVALRY'",
    initials: "HC",
    note: "ARRIVED, ATE 30, LEFT",
    score: 30,
    timeTakenMinutes: 60,
    timestamp: "2026-03-03T12:00:00Z",
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
