import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contributions from "@/components/Contributions";
import DataBackground from "@/components/DataBackground";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import profile from "@/data/profile.json";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [role, setRole] = useState(0);
  const activeSection = useActiveSection();

  useEffect(() => {
    const timer = window.setInterval(
      () => setRole((value) => (value + 1) % profile.roles.length),
      2400,
    );
    return () => window.clearInterval(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <DataBackground />
      <Navbar
        menuOpen={menuOpen}
        activeId={activeSection}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onCloseMenu={closeMenu}
      />
      <Hero
        profile={profile}
        currentRole={profile.roles[role] ?? profile.roles[0] ?? ""}
      />
      <About profile={profile} />
      <Stack />
      <Projects />
      <Certifications />
      <Contributions />
      <Experience />
      <Footer profile={profile} />
    </main>
  );
}

export default App;
