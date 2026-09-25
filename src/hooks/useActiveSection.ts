import { useEffect, useState } from "react";

const SECTION_IDS = [
  "about",
  "skills",
  "work",
  "certifications",
  "github",
  "contact",
];

export function useActiveSection() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-64px 0px -60% 0px" },
    );

    for (const section of sections) {
      observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return activeId;
}
