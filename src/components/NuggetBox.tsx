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
          <i className="nugget n1" />
          <i className="nugget n2" />
          <i className="nugget n3" />
          <i className="nugget n4" />
          <i className="nugget n5" />
          <i className="nugget n6" />
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
