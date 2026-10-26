import { useState } from "react";
import { Hero } from "./components/Hero";
import { Leaderboard } from "./components/Leaderboard";
import { SiteHeader } from "./components/SiteHeader";
import { contestants } from "./leaderboard";
import "./styles.css";

function App() {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [boxHint, setBoxHint] = useState("There may be a surprise inside...");
  const [toast, setToast] = useState("");

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  }

  function toggleBox() {
    const nextIsOpen = !isBoxOpen;
    setIsBoxOpen(nextIsOpen);
    setBoxHint(
      nextIsOpen
        ? "You found the emergency nuggets."
        : "There may be a surprise inside...",
    );

    if (nextIsOpen) {
      showToast("Emergency nuggets deployed. A wise decision.");
    }
  }

  return (
    <>
      <div className="page-noise" aria-hidden="true" />
      <div className="spotlight spotlight-left" aria-hidden="true" />
      <div className="spotlight spotlight-right" aria-hidden="true" />

      <SiteHeader />

      <main>
        <Hero isBoxOpen={isBoxOpen} boxHint={boxHint} onToggleBox={toggleBox} />
        <Leaderboard contestants={contestants} />
      </main>

      <div
        className={`toast${toast ? " show" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </>
  );
}

export default App;
