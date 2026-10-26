import { NuggetPile, scoreStyle } from "./NuggetPile";
import type { Contestant } from "./types";

type ContestantCardProps = {
  contestant: Contestant;
  placement: number;
};

function formatTimeTaken(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes}mins`;
  }

  return `${hours}hr ${remainingMinutes}mins`;
}

export function ContestantCard({ contestant, placement }: ContestantCardProps) {
  return (
    <article
      className={`contestant${contestant.failed ? " failed" : ""}`}
      style={scoreStyle(contestant.score)}
      aria-label={`${contestant.name}, ${contestant.score} nuggets`}
    >
      <div className="person">
        <span className="rank">{placement}</span>
        <span className="avatar">{contestant.initials}</span>
        <div>
          <span className="name">{contestant.name}</span>
          <span className="tag">{contestant.note}</span>
        </div>
      </div>

      <NuggetPile contestant={contestant} />

      <div className="score">
        {contestant.score}
        <small>NUGGETS</small>
        <small className="time-taken">
          {formatTimeTaken(contestant.timeTakenMinutes)}
        </small>
      </div>
    </article>
  );
}
