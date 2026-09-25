import type { ProfileData } from "@/data/types";
import { useReveal } from "@/hooks/useReveal";
import SectionHead from "./SectionHead";

interface AboutProps {
  profile: ProfileData;
}

function About({ profile }: AboutProps) {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className="section shell about reveal" id="about" ref={sectionRef}>
      <SectionHead number="01" label="Acerca" />
      <div className="about-grid">
        <div className="portrait-wrap">
          <img src={profile.about.photo} alt={profile.name} />
          <div className="portrait-note">
            <i /> construyendo ahora
          </div>
        </div>
        <div className="about-copy">
          <h2>{profile.about.headline}</h2>
          <p>{profile.about.bio}</p>
          <p>{profile.about.focus}</p>
        </div>
      </div>
      <div className="stats">
        {profile.stats.map((stat, index) => (
          <div
            key={stat.label}
            className="stagger"
            style={{ "--i": index } as React.CSSProperties}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
