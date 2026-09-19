import skills from "@/data/skills.json";
import SectionHead from "./SectionHead";

function Stack() {
  return (
    <section className="section shell stack" id="skills">
      <SectionHead number="02" label="Stack" />
      <div className="section-intro">
        <h2>
          Technologies
          <br />I work with
        </h2>
        <p>
          A full-spectrum stack — mobile, web,
          <br />
          backend, data and AI.
        </p>
      </div>
      <div className="tech-grid">
        {skills.map((tech, index) => (
          <div
            className="tech-card"
            key={tech.name}
            style={{ "--i": index } as React.CSSProperties}
          >
            <div className="tech-icon">{tech.name.charAt(0)}</div>
            <span>{tech.name}</span>
            <small>{String(index + 1).padStart(2, "0")}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stack;
