import type { ProfileData } from "@/data/types";
import Arrow from "./Arrow";

interface HeroProps {
  profile: ProfileData;
  currentRole: string;
}

function Hero({ profile, currentRole }: HeroProps) {
  return (
    <section className="hero shell">
      <div className="availability">
        <i /> {profile.availability} <span>{profile.year}</span>
      </div>
      <div className="hero-title">
        <h1>
          <span>{profile.name}</span>
          <br />
          {profile.heroTagline}
        </h1>
        <span className="asterisk">✳</span>
      </div>
      <div className="role">
        &gt; {currentRole}
        <span className="cursor">_</span>
      </div>
      <div className="hero-bottom">
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
