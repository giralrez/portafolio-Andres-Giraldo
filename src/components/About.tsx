import type { ProfileData } from "@/data/types";
import SectionHead from "./SectionHead";

interface AboutProps {
  profile: ProfileData;
}

function About({ profile }: AboutProps) {
  return (
    <section className="section shell about" id="about">
      <SectionHead number="01" label="About" />
      <div className="about-grid">
        <div className="portrait-wrap reveal">
          <img src={profile.about.photo} alt={profile.name} />
          <div className="portrait-note">
            <i /> building right now
          </div>
        </div>
        <div className="about-copy">
          <h2>{profile.about.headline}</h2>
          <p>{profile.about.bio}</p>
          <p>{profile.about.focus}</p>
        </div>
      </div>
      <div className="stats">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
