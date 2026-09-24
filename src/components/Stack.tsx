import skills from "@/data/skills.json";
import { useReveal } from "@/hooks/useReveal";
import SectionHead from "./SectionHead";

function Stack() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      className="section shell stack reveal"
      id="skills"
      ref={sectionRef}
    >
      <SectionHead number="02" label="Stack" />
      <div className="section-intro">
        <h2>
          Tecnologías
          <br /> con las que trabajo
        </h2>
        <p>
          Un stack completo — móvil, web,
          <br />
          backend, datos e IA.
        </p>
      </div>
      <div className="tech-grid">
        {skills.map((tech, index) => (
          <div
            className="tech-card stagger"
            key={tech.name}
            style={{ "--i": index % 6 } as React.CSSProperties}
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
