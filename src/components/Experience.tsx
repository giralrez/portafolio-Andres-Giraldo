import experience from "@/data/experience.json";
import SectionHead from "./SectionHead";

function Experience() {
  return (
    <section className="section shell experience">
      <SectionHead number="06" label="Experiencia" />
      <h2>El camino hasta ahora</h2>
      <div className="timeline">
        {experience.map((item) => (
          <article key={item.period}>
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
