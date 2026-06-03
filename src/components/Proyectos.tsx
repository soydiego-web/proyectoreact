import { useState } from "react";
import Card from "./Card";

// Datos de proyectos — arreglo de objetos JavaScript
const proyectosTodos = [
  {
    id: 1,
    categoria: "web",
    icono: "🌐",
    titulo: "Sistema de Matrícula",
    descripcion:
      "Aplicación web para gestionar el proceso de inscripción de estudiantes universitarios, con validaciones en tiempo real y generación de reportes automáticos.",
    tecnologias: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    id: 2,
    categoria: "mobile",
    icono: "📱",
    titulo: "App de Gestión de Tareas",
    descripcion:
      "Aplicación móvil para organizar tareas académicas y personales con recordatorios, categorías por color y estadísticas de productividad semanal.",
    tecnologias: ["React Native", "TypeScript", "Firebase"],
    link: "#",
  },
  {
    id: 3,
    categoria: "web",
    icono: "📊",
    titulo: "Dashboard de Análisis",
    descripcion:
      "Panel de control interactivo con gráficos en tiempo real para visualizar datos académicos, rendimiento por materia y estadísticas de asistencia.",
    tecnologias: ["React", "Chart.js", "REST API", "CSS"],
    link: "#",
  },
  {
    id: 4,
    categoria: "ia",
    icono: "🤖",
    titulo: "Chatbot Académico",
    descripcion:
      "Asistente conversacional para responder preguntas frecuentes sobre procesos universitarios, horarios y trámites, usando NLP básico.",
    tecnologias: ["Python", "Flask", "React", "NLP"],
    link: "#",
  },
  {
    id: 5,
    categoria: "mobile",
    icono: "🗺️",
    titulo: "Mapa del Campus",
    descripcion:
      "Mapa interactivo del campus universitario con búsqueda de aulas, laboratorios y servicios, con rutas y tiempos estimados de caminata.",
    tecnologias: ["React", "Leaflet.js", "TypeScript"],
    link: "#",
  },
  {
    id: 6,
    categoria: "ia",
    icono: "🧠",
    titulo: "Clasificador de Imágenes",
    descripcion:
      "Modelo de machine learning para clasificar imágenes de laboratorio, entrenado con TensorFlow y desplegado como API consumible desde el frontend.",
    tecnologias: ["Python", "TensorFlow", "FastAPI", "React"],
    link: "#",
  },
];

const categorias = ["todos", "web", "mobile", "ia"];

function Proyectos() {
  // Estado para el filtro activo
  const [filtro, setFiltro] = useState("todos");

  // JavaScript puro: filtrar el arreglo según la categoría seleccionada
  const proyectosFiltrados =
    filtro === "todos"
      ? proyectosTodos
      : proyectosTodos.filter((p) => p.categoria === filtro);

  return (
    <section id="proyectos" style={estilos.seccion}>
      <div style={estilos.contenedor}>
        <h2 style={estilos.titulo}>Mis Proyectos</h2>
        <p style={estilos.subtitulo}>
          Una selección de proyectos desarrollados durante mi carrera
        </p>

        {/* Botones de filtro — eventos con estado */}
        <div style={estilos.filtros}>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)} // Evento que actualiza el estado
              style={{
                ...estilos.btnFiltro,
                backgroundColor: filtro === cat ? "#38bdf8" : "transparent",
                color: filtro === cat ? "#0f172a" : "#94a3b8",
                borderColor: filtro === cat ? "#38bdf8" : "#334155",
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Contador dinámico de proyectos */}
        <p style={estilos.contador}>
          Mostrando{" "}
          <strong style={{ color: "#38bdf8" }}>{proyectosFiltrados.length}</strong>{" "}
          proyecto{proyectosFiltrados.length !== 1 ? "s" : ""}
        </p>

        {/* Grid de Cards — React reutiliza el componente Card por cada proyecto */}
        <div style={estilos.grid}>
          {proyectosFiltrados.map((proyecto) => (
            // La prop key es requerida por React para listas
            <Card
              key={proyecto.id}
              icono={proyecto.icono}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              tecnologias={proyecto.tecnologias}
              link={proyecto.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const estilos: Record<string, React.CSSProperties> = {
  seccion: {
    backgroundColor: "#0f172a",
    padding: "5rem 2rem",
  },
  contenedor: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  titulo: {
    color: "#f1f5f9",
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "0.5rem",
  },
  subtitulo: {
    color: "#64748b",
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "1rem",
  },
  filtros: {
    display: "flex",
    gap: "0.75rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "0.75rem",
  },
  btnFiltro: {
    border: "1px solid",
    borderRadius: "20px",
    padding: "0.4rem 1.2rem",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontWeight: "500",
  },
  contador: {
    color: "#64748b",
    textAlign: "center",
    fontSize: "0.85rem",
    marginBottom: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
};

export default Proyectos;
