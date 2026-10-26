import type { CSSProperties } from "react";
import { nuggetLayout } from "../config";
import type { Contestant, NuggetStyle } from "./types";

type NuggetPileProps = {
  contestant: Contestant;
};

export function NuggetPile({ contestant }: NuggetPileProps) {
  const nuggetCount = Math.max(4, Math.ceil(contestant.score / 8));

  return (
    <div className="stack-area">
      <img className="plate" src="/plate.png" alt="" aria-hidden="true" />
      <div className="bones">
        {Array.from({ length: nuggetCount }, (_, index) => {
          const position = nuggetLayout[index % nuggetLayout.length];
          const style: NuggetStyle = {
            "--x": `${position.x}px`,
            "--y": `${position.y}px`,
            "--tilt": `${position.tilt}deg`,
            animationDelay: `${index * -0.13}s`,
          };

          return (
            <img
              className="stack-nugget"
              key={`${contestant.name}-${index}`}
              src="/nugget.png"
              alt=""
              style={style}
            />
          );
        })}
      </div>
    </div>
  );
}

export function scoreStyle(score: number): CSSProperties {
  return { "--score": score } as CSSProperties;
}
