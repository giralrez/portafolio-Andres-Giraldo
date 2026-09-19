import projects from "@/data/projects.json";
import Arrow from "./Arrow";
import SectionHead from "./SectionHead";

const featured = projects[0] as (typeof projects)[number];

function Projects() {
  return (
    <section className="section shell work" id="work">
      <SectionHead number="03" label="Selected work" />
      <div className="work-heading">
        <h2>Featured project</h2>
        <span>{featured.eyebrow}</span>
      </div>
      <article className="project-card">
        <div className="dashboard" aria-label="Dashboard preview">
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
              <span>Overview</span>
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
              Request a demo <Arrow />
            </a>
          </div>
        </div>
      </article>
      <div className="more-work">
        <div>
          <span>Up next</span>
          <h3>More projects in progress</h3>
        </div>
        <p>New AI and automation work will land here soon.</p>
        <a href="#!">
          Follow on GitHub <Arrow />
        </a>
      </div>
    </section>
  );
}

export default Projects;
