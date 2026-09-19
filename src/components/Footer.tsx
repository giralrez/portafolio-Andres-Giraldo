import type { ProfileData } from "@/data/types";
import Arrow from "./Arrow";
import SectionHead from "./SectionHead";

interface FooterProps {
  profile: ProfileData;
}

function Footer({ profile }: FooterProps) {
  return (
    <footer className="contact" id="contact">
      <div className="shell">
        <SectionHead number="07" label="Contact" />
        <div className="contact-main">
          <h2>
            {profile.footer.tagline.split("worth")[0]}
            <br />
            <em>worth{profile.footer.tagline.split("worth")[1]}</em>
          </h2>
          <div>
            <p>{profile.footer.cta}</p>
            <a className="email" href={`mailto:${profile.email}`}>
              {profile.email} <Arrow />
            </a>
          </div>
        </div>
        <div className="socials">
          <a href={profile.socials.linkedin}>
            <b>in</b>LinkedIn <Arrow />
          </a>
          <a href={profile.socials.github}>
            <b>gh</b>GitHub <Arrow />
          </a>
          <a href={`mailto:${profile.email}`}>
            <b>@</b>Email <Arrow />
          </a>
          <a href={profile.socials.resume}>
            Download resume <Arrow />
          </a>
        </div>
        <div className="footer-bottom">
          <span>{profile.footer.copyright}</span>
          <span>{profile.footer.builtWith}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
