import { useState } from "react";

// Interface: define la forma (tipos) de las props
// Esto es TypeScript — da autocompletado y detecta errores
interface CardProps {
  icono: string;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  link?: string; // El ? significa que es opcional
}

// Componente Card reutilizable — se usa múltiples veces con distintas props
function Card({ icono, titulo, descripcion, tecnologias, link }: CardProps) {
  // Estado local del componente — cada Card tiene el suyo propio
  const [expandido, setExpandido] = useState(false);
  const [enHover, setEnHover] = useState(false);

  // Evento: mostrar/ocultar la descripción completa
  const toggleExpandir = () => setExpandido(!expandido);

  return (
    <div
      style={{
        ...estilos.card,
        transform: enHover ? "translateY(-6px)" : "translateY(0)",
        boxShadow: enHover
          ? "0 12px 30px rgba(56,189,248,0.15)"
          : "0 2px 10px rgba(0,0,0,0.2)",
      }}
      // Eventos de mouse para el efecto hover
      onMouseEnter={() => setEnHover(true)}
      onMouseLeave={() => setEnHover(false)}
    >
      <div style={estilos.icono}>{icono}</div>
      <h3 style={estilos.titulo}>{titulo}</h3>

      {/* Renderizado condicional: si expandido muestra todo, si no recorta */}
      <p style={estilos.descripcion}>
        {expandido ? descripcion : `${descripcion.slice(0, 80)}...`}
      </p>

      {/* Botón para expandir — evento onClick */}
      <button onClick={toggleExpandir} style={estilos.btnExpandir}>
        {expandido ? "Ver menos ↑" : "Ver más ↓"}
      </button>

      {/* Renderizado de lista con .map() — JavaScript dentro de JSX */}
      <div style={estilos.tecnologias}>
        {tecnologias.map((tech) => (
          <span key={tech} style={estilos.tag}>
            {tech}
          </span>
        ))}
      </div>

      {/* Renderizado condicional con && */}
      {link && (
        <a href={link} style={estilos.link} target="_blank" rel="noreferrer">
          Ver proyecto →
        </a>
      )}
    </div>
  );
}

const estilos: Record<string, React.CSSProperties> = {
  card: {
    backgroundColor: "#1e293b",
    borderRadius: "12px",
    padding: "1.75rem",
    border: "1px solid #334155",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  icono: {
    fontSize: "2.5rem",
  },
  titulo: {
    color: "#f1f5f9",
    fontSize: "1.15rem",
    fontWeight: "bold",
    margin: 0,
  },
  descripcion: {
    color: "#94a3b8",
    fontSize: "0.9rem",
    lineHeight: 1.6,
    margin: 0,
    flex: 1,
  },
  btnExpandir: {
    background: "none",
    border: "none",
    color: "#38bdf8",
    cursor: "pointer",
    fontSize: "0.85rem",
    padding: 0,
    textAlign: "left",
  },
  tecnologias: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
  },
  tag: {
    backgroundColor: "#0f172a",
    color: "#38bdf8",
    borderRadius: "4px",
    padding: "2px 8px",
    fontSize: "0.78rem",
    border: "1px solid #1e3a5f",
  },
  link: {
    color: "#f472b6",
    fontSize: "0.9rem",
    textDecoration: "none",
    fontWeight: "500",
    marginTop: "0.25rem",
  },
};

export default Card;
