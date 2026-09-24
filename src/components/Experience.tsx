import experience from "@/data/experience.json";
import { useReveal } from "@/hooks/useReveal";
import SectionHead from "./SectionHead";

function Experience() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className="section shell experience reveal" ref={sectionRef}>
      <SectionHead number="06" label="Experiencia" />
      <h2>El camino hasta ahora</h2>
      <div className="timeline">
        {experience.map((item, index) => (
          <article
            key={item.period}
            className="stagger"
            style={{ "--i": index } as React.CSSProperties}
          >
            <time>{item.period}</time>
            <div>
              <h3>{item.role}</h3>
              <span>{item.company}</span>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
