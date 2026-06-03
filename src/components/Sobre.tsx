import { useState } from "react";

const habilidades = [
  { nombre: "React", nivel: 80, color: "#38bdf8" },
  { nombre: "TypeScript", nivel: 70, color: "#7c3aed" },
  { nombre: "JavaScript", nivel: 85, color: "#fbbf24" },
  { nombre: "HTML & CSS", nivel: 90, color: "#f472b6" },
  { nombre: "Node.js", nivel: 60, color: "#4ade80" },
  { nombre: "Python", nivel: 65, color: "#fb923c" },
];

function Sobre() {
  // Estado para mostrar/ocultar la sección de habilidades
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);
  // Estado para el tema de la tarjeta (claro/oscuro)
  const [temaClaro, setTemaClaro] = useState(false);

  return (
    <section id="sobre" style={estilos.seccion}>
      <div style={estilos.contenedor}>

        {/* Grid de dos columnas */}
        <div style={estilos.grid}>

          {/* Tarjeta "Sobre mí" con cambio de tema */}
          <div
            style={{
              ...estilos.card,
              backgroundColor: temaClaro ? "#f1f5f9" : "#1e293b",
              border: temaClaro ? "1px solid #cbd5e1" : "1px solid #334155",
            }}
          >
            <div style={estilos.cardHeader}>
              <h2 style={{ ...estilos.cardTitulo, color: temaClaro ? "#0f172a" : "#f1f5f9" }}>
                Sobre mí
              </h2>
              {/* Botón para cambiar estilos dinámicamente */}
              <button onClick={() => setTemaClaro(!temaClaro)} style={estilos.btnTema}>
                {temaClaro ? "🌙 Oscuro" : "☀️ Claro"}
              </button>
            </div>

            <div style={estilos.avatar}>👨‍💻</div>

            <p style={{ ...estilos.texto, color: temaClaro ? "#475569" : "#94a3b8" }}>
              Estudiante de Ingeniería de software apasionado por el desarrollo
              web y las nuevas tecnologías. Me preparo para construir
              interfaces modernas y experiencias de usuario intuitivas.
            </p>
            <p style={{ ...estilos.texto, color: temaClaro ? "#475569" : "#94a3b8" }}>
              Actualmente cursando el segundo año en la Universidad Estatal de
              Milagro (UNEMI), con enfoque en desarrollo full-stack y
              arquitecturas de software modernas.
            </p>

            <div style={estilos.datos}>
              {[
                { label: "📍 Ubicación", valor: "Milagro, Ecuador" },
                { label: "🎓 Universidad", valor: "UNEMI" },
                { label: "💼 Disponible", valor: "Para prácticas" },
              ].map((d) => (
                <div key={d.label} style={estilos.datoFila}>
                  <span style={{ color: temaClaro ? "#64748b" : "#64748b", fontSize: "0.85rem" }}>
                    {d.label}
                  </span>
                  <span style={{ color: temaClaro ? "#0f172a" : "#f1f5f9", fontSize: "0.85rem", fontWeight: "500" }}>
                    {d.valor}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Panel de habilidades con barra de progreso */}
          <div style={estilos.card} id="habilidades">
            <div style={estilos.cardHeader}>
              <h2 style={estilos.cardTitulo}>Habilidades</h2>
              {/* Botón para mostrar/ocultar — interactividad JS */}
              <button
                onClick={() => setMostrarHabilidades(!mostrarHabilidades)}
                style={estilos.btnVerHabilidades}
              >
                {mostrarHabilidades ? "Ocultar ↑" : "Mostrar ↓"}
              </button>
            </div>

            <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "1rem" }}>
              Tecnologías que uso en mis proyectos:
            </p>

            {/* Renderizado condicional — solo muestra si el estado es true */}
            {mostrarHabilidades ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {habilidades.map((h) => (
                  <div key={h.nombre}>
                    <div style={estilos.habilidadHeader}>
                      <span style={{ color: "#f1f5f9", fontSize: "0.9rem" }}>{h.nombre}</span>
                      <span style={{ color: h.color, fontSize: "0.85rem", fontWeight: "bold" }}>
                        {h.nivel}%
                      </span>
                    </div>
                    {/* Barra de progreso con ancho dinámico (JavaScript) */}
                    <div style={estilos.barraFondo}>
                      <div
                        style={{
                          ...estilos.barraRelleno,
                          width: `${h.nivel}%`,
                          backgroundColor: h.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={estilos.habilidadesOcultas}>
                <p style={{ color: "#64748b", textAlign: "center" }}>
                  Haz clic en "Mostrar" para ver las habilidades
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
                  {habilidades.map((h) => (
                    <span
                      key={h.nombre}
                      style={{
                        backgroundColor: "#0f172a",
                        color: h.color,
                        borderRadius: "4px",
                        padding: "4px 10px",
                        fontSize: "0.8rem",
                        border: `1px solid ${h.color}33`,
                      }}
                    >
                      {h.nombre}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const estilos: Record<string, React.CSSProperties> = {
  seccion: {
    backgroundColor: "#0c1222",
    padding: "5rem 2rem",
  },
  contenedor: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: "12px",
    padding: "2rem",
    border: "1px solid #334155",
    transition: "background-color 0.3s, border 0.3s",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.25rem",
  },
  cardTitulo: {
    color: "#f1f5f9",
    fontSize: "1.3rem",
    fontWeight: "bold",
    margin: 0,
  },
  btnTema: {
    backgroundColor: "transparent",
    border: "1px solid #334155",
    color: "#94a3b8",
    borderRadius: "6px",
    padding: "4px 10px",
    fontSize: "0.8rem",
    cursor: "pointer",
  },
  btnVerHabilidades: {
    backgroundColor: "#38bdf8",
    border: "none",
    color: "#0f172a",
    borderRadius: "6px",
    padding: "4px 12px",
    fontSize: "0.8rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
  avatar: {
    fontSize: "4rem",
    textAlign: "center",
    marginBottom: "1rem",
  },
  texto: {
    fontSize: "0.9rem",
    lineHeight: 1.7,
    marginBottom: "0.75rem",
  },
  datos: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginTop: "1rem",
    borderTop: "1px solid #334155",
    paddingTop: "1rem",
  },
  datoFila: {
    display: "flex",
    justifyContent: "space-between",
  },
  habilidadHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "4px",
  },
  barraFondo: {
    backgroundColor: "#0f172a",
    borderRadius: "4px",
    height: "8px",
    overflow: "hidden",
  },
  barraRelleno: {
    height: "100%",
    borderRadius: "4px",
    transition: "width 0.6s ease",
  },
  habilidadesOcultas: {
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
};

export default Sobre;
