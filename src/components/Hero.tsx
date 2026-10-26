import { Eyebrow } from "./Eyebrow";
import { NuggetBox } from "./NuggetBox";

type HeroProps = {
  isBoxOpen: boolean;
  boxHint: string;
  onToggleBox: () => void;
};

export function Hero({ isBoxOpen, boxHint, onToggleBox }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <Eyebrow>A VERY SERIOUS COMPETITION</Eyebrow>
        <h1>
          THE
          <br />
          <span>CRUNCH</span>
          <br />
          IS ON.
        </h1>
        <p className="hero-intro">
          One hundred nuggets. One table. Zero dignity.
          <br />
          Watch the brave, the bold, and the defeated.
        </p>
        <div className="hero-meta">
          <div>
            <span className="meta-label">CHALLENGE</span>
            <strong>100 NUGGETS</strong>
          </div>
          <div>
            <span className="meta-label">SEASON</span>
            <strong>10 / 2026</strong>
          </div>
        </div>
      </div>

      <div
        className="hero-art"
        aria-label="Illustration of a box of chicken nuggets"
      >
        <div className="sunburst" />
        <div className="floating-sticker sticker-top">
          EAT
          <br />
          MORE
        </div>
        <NuggetBox isOpen={isBoxOpen} onToggle={onToggleBox} />
        <div className="floating-sticker sticker-bottom">
          NO
          <br />
          REGRETS
        </div>
        <p className="box-hint">{boxHint}</p>
      </div>
    </section>
  );
}
