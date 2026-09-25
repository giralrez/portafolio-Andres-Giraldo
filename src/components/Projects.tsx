import githubData from "@/data/github.json";
import projects from "@/data/projects.json";
import { useReveal } from "@/hooks/useReveal";
import Arrow from "./Arrow";
import SectionHead from "./SectionHead";

const featured = projects[0] as (typeof projects)[number];

function Projects() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section className="section shell work reveal" id="work" ref={sectionRef}>
      <SectionHead number="03" label="Proyectos" />
      <div className="work-heading">
        <h2>Proyecto destacado</h2>
        <span>{featured.eyebrow}</span>
      </div>
      <article className="project-card">
        <div className="dashboard" aria-label="Vista previa del dashboard">
          <div className="dash-sidebar">
            <b>{featured.title.substring(0, 2).toUpperCase()}</b>
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="dash-content">
            <div className="dash-top">
              <span>Resumen</span>
              <i />
            </div>
            <div className="dash-stats">
              <i />
              <i />
              <i />
            </div>
            <div className="dash-panels">
              <i />
              <i />
            </div>
            <div className="dash-chart">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <span className="project-index">{featured.index}</span>
        </div>
        <div className="project-info">
          <div className="eyebrow">{featured.eyebrow}</div>
          <h3>
            {featured.title.split(featured.titleHighlight)[0]}
            <span>{featured.titleHighlight}</span>
          </h3>
          <p>{featured.description}</p>
          <div className="pills">
            {featured.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="project-links">
            <a href={featured.github}>
              GitHub <Arrow />
            </a>
            <a href={featured.demo}>
              Ver demo <Arrow />
            </a>
          </div>
        </div>
      </article>
      <div className="more-work">
        <div>
          <span>A continuación</span>
          <h3>Más proyectos en progreso</h3>
        </div>
        <p>Nuevo trabajo en IA y automatización llegará pronto aquí.</p>
        <a
          href={`https://github.com/${githubData.username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Seguir en GitHub <Arrow />
        </a>
      </div>
    </section>
  );
}

export default Projects;
