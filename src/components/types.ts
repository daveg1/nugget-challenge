import type { CSSProperties } from "react";

export type Contestant = {
  name: string;
  initials: string;
  note: string;
  score: number;
  timeTakenMinutes: number;
  timestamp: string;
  failed?: boolean;
};

export type NuggetPosition = {
  x: number;
  y: number;
  tilt: number;
};

export type NuggetStyle = CSSProperties & {
  "--x": string;
  "--y": string;
  "--tilt": string;
};
