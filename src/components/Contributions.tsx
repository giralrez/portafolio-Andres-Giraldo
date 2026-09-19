import githubData from "@/data/github.json";
import { useGitHubContributions } from "@/hooks/useGitHubContributions";
import Arrow from "./Arrow";
import SectionHead from "./SectionHead";

function Contributions() {
  const { contributions, stats, loading } = useGitHubContributions(
    githubData.username,
  );

  return (
    <section className="section shell github" id="github">
      <SectionHead number="05" label="GitHub" />
      <div className="github-head">
        <div>
          <h2>Open-source activity</h2>
          <span>@{githubData.username}</span>
        </div>
        <a href={`https://github.com/${githubData.username}`}>
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
          {loading
            ? Array.from({ length: 273 }, (_, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: skeleton loader is static
                <i key={`skeleton-${i}`} className="skeleton" />
              ))
            : contributions.map(({ id, level }) => (
                <i key={id} className={level} />
              ))}
        </div>
      </div>
      <div className="github-stats">
        <div>
          <strong>{stats.contributions}</strong>
          <span>Contributions</span>
        </div>
        <div>
          <strong>{stats.repositories}</strong>
          <span>Repositories</span>
        </div>
        <div>
          <strong>{stats.stars}</strong>
          <span>Stars earned</span>
        </div>
        <div>
          <strong>{stats.streak}</strong>
          <span>Commit streak</span>
        </div>
      </div>
      <div className="languages">
        <span>Top languages</span>
        <div className="language-bar">
          {githubData.languages.map((lang) => (
            <i
              key={lang.name}
              style={{ flex: lang.percent, background: lang.color }}
            />
          ))}
        </div>
        <div className="language-key">
          {githubData.languages.map((lang) => (
            <span key={lang.name}>
              {lang.name} <b>{lang.percent}%</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contributions;
