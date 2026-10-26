import type { KeyboardEvent } from "react";

type NuggetBoxProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function NuggetBox({ isOpen, onToggle }: NuggetBoxProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  }

  return (
    <div
      className={`nugget-box${isOpen ? " open" : ""}`}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
    >
      <div className="box-lid">
        <span>100</span>
        <small>NUGGETS</small>
      </div>
      <div className="box-base">
        <div className="box-label">
          CHICKEN
          <br />
          <strong>CHAMPS</strong>
        </div>
        <div className="box-checker" />
        <div className="box-nuggets" aria-hidden="true">
          <img
            className="nugget n1"
            src="/nugget.png"
            alt=""
            draggable={false}
          />
          <img
            className="nugget n2"
            src="/nugget.png"
            alt=""
            draggable={false}
          />
          <img
            className="nugget n3"
            src="/nugget.png"
            alt=""
            draggable={false}
          />
          <img
            className="nugget n4"
            src="/nugget.png"
            alt=""
            draggable={false}
          />
          <img
            className="nugget n5"
            src="/nugget.png"
            alt=""
            draggable={false}
          />
          <img
            className="nugget n6"
            src="/nugget.png"
            alt=""
            draggable={false}
          />
        </div>
      </div>
      <div className="box-callout">
        TAP TO
        <br />
        OPEN
      </div>
    </div>
  );
}
