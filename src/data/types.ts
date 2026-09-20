export interface ProfileData {
  name: string;
  username: string;
  email: string;
  roles: string[];
  availability: string;
  year: string;
  heroTagline: string;
  about: {
    headline: string;
    bio: string;
    focus: string;
    photo: string;
  };
  stats: { value: string; label: string }[];
  socials: {
    linkedin: string;
    github: string;
    resume: string;
  };
  footer: {
    tagline: string;
    cta: string;
    copyright: string;
    builtWith: string;
  };
}
