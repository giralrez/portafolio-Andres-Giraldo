import { useEffect, useState } from "react";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 18 18">
    <path d="M3 15 15 3M6 3h9v9" />
  </svg>
);

const tech = [
  ["Python", "python"],
  ["Flutter", "flutter"],
  ["React", "react"],
  ["Next.js", "nextjs"],
  ["TypeScript", "typescript"],
  ["Node.js", "nodejs"],
  ["Supabase", "supabase"],
  ["Firebase", "firebase"],
  ["PostgreSQL", "postgresql"],
  ["C#", "csharp"],
  ["C++", "cpp"],
  ["Java", "java"],
  ["Tailwind", "tailwind"],
  ["Claude", "claude"],
  ["Vercel", "vercel"],
  ["Git & GitHub", "git"],
  ["Docker", "docker"],
  ["Linux", "linux"],
];

const credentials = [
  ["AWS Academy Graduate — Cloud Foundations", "AWS Academy"],
  [
    "CCNA: Switching, Routing & Wireless Essentials",
    "Cisco Networking Academy",
  ],
  ["Python Essentials 1", "Cisco Networking Academy"],
  ["JavaScript Essentials 1", "Cisco Networking Academy"],
  ["Introduction to Cybersecurity", "Cisco Networking Academy"],
  ["Introduction to Data Science", "Cisco Networking Academy"],
  ["English for IT 1", "Cisco Networking Academy"],
  ["Learn-A-Thon 2023 — Participant", "Cisco Networking Academy"],
  ["CRUD Operations", "MongoDB"],
  ["Relational to Document Model", "MongoDB"],
  ["Fundamentals of Data Transformation", "MongoDB"],
  ["Schema Design Optimization", "MongoDB"],
  ["Schema Patterns and Anti-patterns", "MongoDB"],
  ["Advanced Schema Patterns and Anti-patterns", "MongoDB"],
].map(([name, org]) => ({
  name: name as string,
  org: org as string,
  id: (name as string).toLowerCase().replace(/ /g, "-"),
}));

const contributionDays = Array.from({ length: 273 }, (_, day) => ({
  id: `day-${day + 1}`,
  level:
    (day * 17 + Math.floor(day / 12)) % 11 === 0
      ? "l4"
      : (day * 7) % 13 < 2
        ? "l3"
        : day % 7 === 0
          ? "l2"
          : day % 5 === 0
            ? "l1"
            : "",
}));

const SectionHead = ({ number, label }: { number: string; label: string }) => (
  <div className="section-head">
    <span>{number}</span>
    <span className="rule" />
    <b>{label}</b>
  </div>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [role, setRole] = useState(0);
  const roles = ["AI Engineer", "Full Stack Developer", "Cloud Engineer"];

  useEffect(() => {
    const timer = window.setInterval(
      () => setRole((value) => (value + 1) % roles.length),
      2400,
    );
    return () => window.clearInterval(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <header className="nav shell">
        <a className="logo" href="#top">
          andres<span>.dev</span>
        </a>
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          {[
            ["About", "about"],
            ["Skills", "skills"],
            ["Work", "work"],
            ["GitHub", "github"],
            ["Contact", "contact"],
          ].map(([name, id]) => (
            <a href={`#${id}`} key={id} onClick={closeMenu}>
              {name}
            </a>
          ))}
        </nav>
        <a className="talk-link" href="#contact">
          Let's talk <Arrow />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero shell">
        <div className="availability">
          <i /> Available for projects <span>2026</span>
        </div>
        <div className="hero-title">
          <h1>
            <span>Andres Giraldo</span>
            <br />
            builds intelligent
            <br />
            software.
          </h1>
          <span className="asterisk">✳</span>
        </div>
        <div className="role" key={role}>
          &gt; {roles[role]}
          <span className="cursor">_</span>
        </div>
        <div className="hero-bottom">
          <div className="hero-actions">
            <a className="button button-fill" href="#work">
              Explore my work <Arrow />
            </a>
            <a className="button" href="#contact">
              Get in touch <Arrow />
            </a>
          </div>
          <a className="scroll" href="#about">
            <span>Scroll</span>
            <i />
          </a>
        </div>
        <div className="hero-grid" aria-hidden="true" />
      </section>

      <section className="section shell about" id="about">
        <SectionHead number="01" label="About" />
        <div className="about-grid">
          <div className="portrait-wrap reveal">
            <img src="https://placehold.co/400x500" alt="Andres Giraldo" />
            <div className="portrait-note">
              <i /> building right now
            </div>
          </div>
          <div className="about-copy">
            <h2>
              Independent full-stack developer with an <em>AI-native</em>{" "}
              workflow.
            </h2>
            <p>
              Soy Andres Giraldo — un desarrollador que entrega productos
              completos: desde modelos de datos y APIs hasta interfaces pulidas
              multiplataforma. Trabajo con IA como herramienta principal,
              combinando Claude con un stack robusto de React, Flutter, Node y
              Supabase para pasar de la idea a producción rápidamente.
            </p>
            <p>
              Mi enfoque: software de negocio que se siente natural — como{" "}
              <a href="#!">MiProyecto</a>, una aplicación web completa para
              gestión de negocios.
            </p>
          </div>
        </div>
        <div className="stats">
          <div>
            <strong>3+</strong>
            <span>Years coding</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Projects built</span>
          </div>
          <div>
            <strong>18+</strong>
            <span>Technologies</span>
          </div>
          <div>
            <strong>AI</strong>
            <span>AI Native workflow</span>
          </div>
        </div>
      </section>

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
          {tech.map(([name], index) => (
            <div
              className="tech-card"
              key={name}
              style={{ "--i": index } as React.CSSProperties}
            >
              <div className="tech-icon">{(name as string).charAt(0)}</div>
              <span>{name}</span>
              <small>{String(index + 1).padStart(2, "0")}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell work" id="work">
        <SectionHead number="03" label="Selected work" />
        <div className="work-heading">
          <h2>Featured project</h2>
          <span>Superadmin dashboard</span>
        </div>
        <article className="project-card">
          <div className="dashboard" aria-label="Dashboard preview">
            <div className="dash-sidebar">
              <b>MP</b>
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
            <span className="project-index">01</span>
          </div>
          <div className="project-info">
            <div className="eyebrow">ERP · FINTECH · 2025</div>
            <h3>
              Billetera<span>Gestia</span>
            </h3>
            <p>
              A lightweight ERP focused on accounts payable and receivable —
              giving businesses a clear, real-time picture of what's owed and
              what's due, without heavyweight enterprise complexity.
            </p>
            <div className="pills">
              {["React", "Supabase", "Node.js", "TypeScript", "PostgreSQL"].map(
                (item) => (
                  <span key={item}>{item}</span>
                ),
              )}
            </div>
            <div className="project-links">
              <a href="#!">
                GitHub <Arrow />
              </a>
              <a href="#contact">
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

      <section className="section credentials" id="certifications">
        <div className="shell">
          <SectionHead number="04" label="Certifications" />
          <div className="credential-heading">
            <h2>Verified credentials</h2>
            <div>
              <a href="#!">
                Academic transcript (PDF) <Arrow />
              </a>
              <a href="#!">
                View all on Credly <Arrow />
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
                  {org === "MongoDB"
                    ? "M"
                    : (org as string).startsWith("AWS")
                      ? "aws"
                      : "C"}
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

      <section className="section shell github" id="github">
        <SectionHead number="05" label="GitHub" />
        <div className="github-head">
          <div>
            <h2>Open-source activity</h2>
            <span>@andresgiraldo</span>
          </div>
          <a href="#!">
            Open profile <Arrow />
          </a>
        </div>
        <div className="contribution-card">
          <div className="contribution-top">
            <span>Contributions · last 12 months</span>
            <span>
              Less <i />
              <i />
              <i />
              <i />
              <i /> More
            </span>
          </div>
          <div className="contribution-grid">
            {contributionDays.map(({ id, level }) => (
              <i key={id} className={level} />
            ))}
          </div>
        </div>
        <div className="github-stats">
          <div>
            <strong>42</strong>
            <span>Contributions</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Repositories</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Stars earned</span>
          </div>
          <div>
            <strong>7d</strong>
            <span>Commit streak</span>
          </div>
        </div>
        <div className="languages">
          <span>Top languages</span>
          <div className="language-bar">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="language-key">
            <span>
              JavaScript <b>55%</b>
            </span>
            <span>
              TypeScript <b>24%</b>
            </span>
            <span>
              Dart <b>13%</b>
            </span>
            <span>
              PLpgSQL <b>4%</b>
            </span>
            <span>
              Other <b>4%</b>
            </span>
          </div>
        </div>
      </section>

      <section className="section shell experience">
        <SectionHead number="06" label="Experience" />
        <h2>The journey so far</h2>
        <div className="timeline">
          <article>
            <time>2024 — Present</time>
            <div>
              <h3>Independent Full-Stack Developer</h3>
              <span>Freelance</span>
            </div>
            <p>
              Designing and shipping complete products for clients and my own
              ventures — web apps in React/Next.js, mobile apps in Flutter,
              backends on Node, Supabase and Firebase.
            </p>
          </article>
          <article>
            <time>2025</time>
            <div>
              <h3>Creator — MiProyecto</h3>
              <span>Personal product</span>
            </div>
            <p>
              Built a lightweight ERP for accounts payable and receivable from
              zero to working product: data model, API, and a clean
              finance-focused interface.
            </p>
          </article>
          <article>
            <time>Ongoing</time>
            <div>
              <h3>AI Engineering & Certifications</h3>
              <span>Continuous learning</span>
            </div>
            <p>
              Deepening AI-assisted development with Claude and modern tooling;
              verified credentials published on Credly.
            </p>
          </article>
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="shell">
          <SectionHead number="07" label="Contact" />
          <div className="contact-main">
            <h2>
              Let's build something
              <br />
              <em>worth talking about.</em>
            </h2>
            <div>
              <p>
                Open to freelance projects, product collaborations and full-time
                opportunities.
              </p>
              <a className="email" href="mailto:andresgiraldo@email.com">
                andresgiraldo@email.com <Arrow />
              </a>
            </div>
          </div>
          <div className="socials">
            <a href="#!">
              <b>in</b>LinkedIn <Arrow />
            </a>
            <a href="#!">
              <b>gh</b>GitHub <Arrow />
            </a>
            <a href="mailto:andresgiraldo@email.com">
              <b>@</b>Email <Arrow />
            </a>
            <a href="#!">
              Download resume <Arrow />
            </a>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Andres Giraldo</span>
            <span>Designed & built with AI-native tooling</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
