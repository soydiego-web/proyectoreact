import { useState } from "react";

// Un componente es una función que devuelve JSX (HTML dentro de JavaScript)
// Props: datos que el padre envía al componente hijo
interface NavbarProps {
  titulo: string;
}

function Navbar({ titulo }: NavbarProps) {
  // useState: variable reactiva — cuando cambia, React re-renderiza el componente
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Evento: función que se ejecuta cuando el usuario interactúa
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav style={estilos.nav}>
      <div style={estilos.contenedor}>
        {/* JSX: HTML dentro de JavaScript, con llaves {} para expresiones JS */}
        <span style={estilos.logo}>{titulo}</span>

        {/* Botón hamburguesa - visible solo en móvil */}
        <button onClick={toggleMenu} style={estilos.botonMenu}>
          {menuAbierto ? "✕" : "☰"}
        </button>

        {/* Lista de links — className en vez de class (diferencia con HTML) */}
        <ul
          style={{
            ...estilos.links,
            display: menuAbierto ? "flex" : undefined,
          }}
          className="nav-links"
        >
          <li><a href="#inicio" style={estilos.link}>Inicio</a></li>
          <li><a href="#sobre" style={estilos.link}>Sobre mí</a></li>
          <li><a href="#habilidades" style={estilos.link}>Habilidades</a></li>
          <li><a href="#proyectos" style={estilos.link}>Proyectos</a></li>
          <li><a href="#contacto" style={estilos.link}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

// Estilos como objetos JavaScript (camelCase en vez de kebab-case)
const estilos: Record<string, React.CSSProperties> = {
  nav: {
    backgroundColor: "#0f172a",
    padding: "0 2rem",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },
  contenedor: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "64px",
  },
  logo: {
    color: "#38bdf8",
    fontWeight: "bold",
    fontSize: "1.3rem",
    letterSpacing: "1px",
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "2.5rem",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.2s",
  },
  botonMenu: {
    display: "none",
    background: "none",
    border: "none",
    color: "#38bdf8",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
};

export default Navbar;
