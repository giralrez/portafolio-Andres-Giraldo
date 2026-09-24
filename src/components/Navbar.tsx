import Arrow from "./Arrow";

interface NavbarProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}

const navLinks = [
  ["Acerca", "about"],
  ["Stack", "skills"],
  ["Proyectos", "work"],
  ["GitHub", "github"],
  ["Contacto", "contact"],
] as const;

function Navbar({ menuOpen, onToggleMenu, onCloseMenu }: NavbarProps) {
  return (
    <header className="nav shell">
      <a className="logo" href="#top">
        4ndr3s<span>D3v</span>
      </a>
      <nav className={menuOpen ? "open" : ""} aria-label="Navegación principal">
        {navLinks.map(([name, id]) => (
          <a href={`#${id}`} key={id} onClick={onCloseMenu}>
            {name}
          </a>
        ))}
      </nav>
      <a className="talk-link" href="#contact">
        Hablemos <Arrow />
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="Abrir menú"
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
