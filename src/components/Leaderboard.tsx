import { Eyebrow } from "./Eyebrow";
import { ContestantCard } from "./ContestantCard";
import type { Contestant } from "./types";

type LeaderboardProps = {
  contestants: Contestant[];
};

export function Leaderboard({ contestants }: LeaderboardProps) {
  return (
    <section className="leaderboard-section">
      <div className="section-heading">
        <div>
          <Eyebrow>THE HALL OF FAME (AND SHAME)</Eyebrow>
          <h2>
            MEET THE <span>CONTENDERS</span>
          </h2>
        </div>
      </div>

      <div className="table-wrap">
        <div className="table-topline">
          <span>RANK / CONTENDER</span>
          <span>STACK HEIGHT = NUGGETS EATEN</span>
          <span>FINAL SCORE</span>
        </div>
        <div className="contestants">
          {contestants.map((contestant) => (
            <ContestantCard key={contestant.name} contestant={contestant} />
          ))}
        </div>
      </div>
    </section>
  );
}
