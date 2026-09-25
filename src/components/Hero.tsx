import type { ProfileData } from "@/data/types";
import Arrow from "./Arrow";

interface HeroProps {
  profile: ProfileData;
  currentRole: string;
}

function Hero({ profile, currentRole }: HeroProps) {
  return (
    <section className="hero shell">
      <div
        className="availability hero-enter"
        style={{ "--delay": "0ms" } as React.CSSProperties}
      >
        <i /> {profile.availability} <span>{profile.year}</span>
      </div>
      <div
        className="hero-title hero-enter"
        style={{ "--delay": "80ms" } as React.CSSProperties}
      >
        <h1>
          <span>{profile.name}</span>
          <br />
          {profile.heroTagline}
        </h1>
        <span className="asterisk">✳</span>
      </div>
      <div
        className="role hero-enter"
        style={{ "--delay": "160ms" } as React.CSSProperties}
      >
        &gt; {currentRole}
        <span className="cursor">_</span>
      </div>
      <div
        className="hero-bottom hero-enter"
        style={{ "--delay": "240ms" } as React.CSSProperties}
      >
        <div className="hero-actions">
          <a className="button button-fill" href="#work">
            Ver mi trabajo <Arrow />
          </a>
          <a className="button" href="#contact">
            Contáctame <Arrow />
          </a>
        </div>
        <a className="scroll" href="#about">
          <span>Desliza</span>
          <i />
        </a>
      </div>
      <div className="hero-grid" aria-hidden="true" />
    </section>
  );
}

export default Hero;
