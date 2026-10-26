import { NuggetPile, scoreStyle } from "./NuggetPile";
import type { Contestant } from "./types";

type ContestantCardProps = {
  contestant: Contestant;
};

export function ContestantCard({ contestant }: ContestantCardProps) {
  return (
    <article
      className={`contestant${contestant.failed ? " failed" : ""}`}
      style={scoreStyle(contestant.score)}
      aria-label={`${contestant.name}, ${contestant.score} nuggets`}
    >
      <div className="person">
        <span className="rank">{contestant.place}</span>
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
      </div>
    </article>
  );
}
