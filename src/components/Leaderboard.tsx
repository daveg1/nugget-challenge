import { Eyebrow } from "./Eyebrow";
import { ContestantCard } from "./ContestantCard";
import type { Contestant } from "./types";

type LeaderboardProps = {
  contestants: Contestant[];
};

export function Leaderboard({ contestants }: LeaderboardProps) {
  const sortedContestants = [...contestants].sort(
    (contestantA, contestantB) => {
      const scoreDifference = contestantB.score - contestantA.score;
      const timeDifference =
        contestantA.timeTakenMins - contestantB.timeTakenMins;
      const dateDifference = contestantA.timestamp
        .slice(0, 10)
        .localeCompare(contestantB.timestamp.slice(0, 10));

      return (
        scoreDifference ||
        timeDifference ||
        dateDifference ||
        contestantA.name.localeCompare(contestantB.name)
      );
    },
  );

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

      <div className="table-topline">
        <span>RANK / CONTENDER</span>
        <span>STACK HEIGHT = NUGGETS EATEN</span>
        <span>FINAL SCORE</span>
      </div>

      <div className="contestants">
        {sortedContestants.map((contestant, index) => (
          <ContestantCard
            key={contestant.name}
            contestant={contestant}
            placement={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
