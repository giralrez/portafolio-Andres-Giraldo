import certifications from "@/data/certifications.json";
import Arrow from "./Arrow";
import SectionHead from "./SectionHead";

const credentials = certifications.map((item) => ({
  ...item,
  id: item.name.toLowerCase().replace(/ /g, "-"),
}));

function Certifications() {
  return (
    <section className="section credentials" id="certifications">
      <div className="shell">
        <SectionHead number="04" label="Certificaciones" />
        <div className="credential-heading">
          <h2>Credenciales verificadas</h2>
          <div>
            <a href="#!">
              Constancia académica (PDF) <Arrow />
            </a>
            <a href="#!">
              Ver todas en Credly <Arrow />
            </a>
          </div>
        </div>
      </div>
      <div className="marquee-wrap">
        <div className="credential-track">
          {[
            ...credentials.map((item) => ({ ...item, copy: "a" })),
            ...credentials.map((item) => ({ ...item, copy: "b" })),
          ].map(({ name, org, id, copy }) => (
            <div className="credential" key={`${id}-${copy}`}>
              <span className="credential-mark">
                {org === "MongoDB" ? "M" : org.startsWith("AWS") ? "aws" : "C"}
              </span>
              <div>
                <b>{name}</b>
                <small>{org}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
