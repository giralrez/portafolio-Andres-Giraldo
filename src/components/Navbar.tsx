import Arrow from "./Arrow";

interface NavbarProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}

const navLinks = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Work", "work"],
  ["GitHub", "github"],
  ["Contact", "contact"],
] as const;

function Navbar({ menuOpen, onToggleMenu, onCloseMenu }: NavbarProps) {
  return (
    <header className="nav shell">
      <a className="logo" href="#top">
        andres<span>.dev</span>
      </a>
      <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
        {navLinks.map(([name, id]) => (
          <a href={`#${id}`} key={id} onClick={onCloseMenu}>
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
        onClick={onToggleMenu}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

export default Navbar;
