import type { Contestant, NuggetStyle } from "./types";

type NuggetPileProps = {
  contestant: Contestant;
};

// predetermined layout for nugget pile. Randomness can be sprinkled on afterwards for offsets and rotations
const nuggetLayout = [
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

export function NuggetPile({ contestant }: NuggetPileProps) {
  const nuggetCount = Math.max(4, Math.ceil(contestant.score / 8));

  return (
    <div className="stack-area">
      <img
        className="plate"
        src="/plate.png"
        alt=""
        aria-hidden="true"
        draggable={false}
      />
      <div className="pile">
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
              draggable={false}
            />
          );
        })}
      </div>
    </div>
  );
}
