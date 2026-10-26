import type { CSSProperties } from "react";

export type Contestant = {
  name: string;
  initials: string;
  note: string;
  score: number;
  timeTakenMins: number;
  timestamp: string;
  failed?: boolean;
};

export type NuggetStyle = CSSProperties & {
  "--x": string;
  "--y": string;
  "--tilt": string;
};
