import { useState } from "react";

function Hero() {
  // Estado para el contador — ejemplo de interactividad con JavaScript
  const [contador, setContador] = useState(0);
  // Estado para el mensaje dinámico
  const [mensaje, setMensaje] = useState("");
  // Estado para alternar el color del título
  const [colorActivo, setColorActivo] = useState(false);

  // Función que maneja el evento del contador
  const incrementar = () => setContador(contador + 1);
  const reiniciar = () => {
    setContador(0);
    setMensaje("¡Contador reiniciado!");
    setTimeout(() => setMensaje(""), 2000);
  };

  // Función con lógica JavaScript para cambiar texto dinámicamente
  const mostrarSaludo = () => {
    const hora = new Date().getHours();
    if (hora < 12) setMensaje("¡Buenos días! ☀️");
    else if (hora < 18) setMensaje("¡Buenas tardes! 🌤️");
    else setMensaje("¡Buenas noches! 🌙");
  };

  return (
    <section id="inicio" style={estilos.seccion}>
      <div style={estilos.contenido}>

        {/* Título con cambio de color dinámico — evento onClick */}
        <h1
          style={{
            ...estilos.titulo,
            color: colorActivo ? "#f472b6" : "#38bdf8",
            cursor: "pointer",
          }}
          onClick={() => setColorActivo(!colorActivo)}
          title="¡Haz clic para cambiar mi color!"
        >
          Hola, soy Diego 👋
        </h1>

        <p style={estilos.subtitulo}>
          Desarrollador Web · Estudiante de Ingeniería · React Enthusiast
        </p>

        {/* Mensaje dinámico — aparece y desaparece */}
        {mensaje && (
          <div style={estilos.mensajeDinamico}>
            {mensaje}
          </div>
        )}

        {/* Botones con eventos */}
        <div style={estilos.botones}>
          <button onClick={mostrarSaludo} style={estilos.btnPrimario}>
            ¿Qué hora es? 🕐
          </button>
          <a href="#proyectos" style={estilos.btnSecundario}>
            Ver proyectos ↓
          </a>
        </div>

        {/* Contador interactivo — muestra estado dinámico con JS */}
        <div style={estilos.contadorBox}>
          <p style={estilos.contadorLabel}>Contador de visitas (demo):</p>
          <div style={estilos.contadorFila}>
            <button onClick={reiniciar} style={estilos.btnContador}>↺</button>
            <span style={estilos.contadorNum}>{contador}</span>
            <button onClick={incrementar} style={estilos.btnContador}>+</button>
          </div>
          <p style={estilos.contadorHint}>
            {contador === 0
              ? "Presiona + para incrementar"
              : contador < 5
              ? "¡Sigue sumando!"
              : contador < 10
              ? "¡Vas bien! 🔥"
              : "¡Wow, eres persistente! 🚀"}
          </p>
        </div>

      </div>

      {/* Decoración visual */}
      <div style={estilos.decoracion} aria-hidden="true">
        <div style={estilos.circulo1} />
        <div style={estilos.circulo2} />
      </div>
    </section>
  );
}

const estilos: Record<string, React.CSSProperties> = {
  seccion: {
    minHeight: "90vh",
    backgroundColor: "#0f172a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem 2rem",
    position: "relative",
    overflow: "hidden",
  },
  contenido: {
    maxWidth: "700px",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },
  titulo: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: "bold",
    marginBottom: "1rem",
    transition: "color 0.3s ease",
    userSelect: "none",
  },
  subtitulo: {
    color: "#94a3b8",
    fontSize: "1.15rem",
    marginBottom: "2rem",
    lineHeight: 1.7,
  },
  mensajeDinamico: {
    backgroundColor: "#1e293b",
    color: "#38bdf8",
    border: "1px solid #38bdf8",
    borderRadius: "8px",
    padding: "0.75rem 1.5rem",
    marginBottom: "1.5rem",
    fontSize: "1rem",
    fontWeight: "500",
    animation: "fadeIn 0.3s ease",
  },
  botones: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "2.5rem",
  },
  btnPrimario: {
    backgroundColor: "#38bdf8",
    color: "#0f172a",
    border: "none",
    borderRadius: "8px",
    padding: "0.75rem 1.75rem",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.15s, background 0.2s",
  },
  btnSecundario: {
    backgroundColor: "transparent",
    color: "#38bdf8",
    border: "2px solid #38bdf8",
    borderRadius: "8px",
    padding: "0.75rem 1.75rem",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    transition: "background 0.2s",
  },
  contadorBox: {
    backgroundColor: "#1e293b",
    borderRadius: "12px",
    padding: "1.5rem 2rem",
    border: "1px solid #334155",
    display: "inline-block",
    minWidth: "260px",
  },
  contadorLabel: {
    color: "#94a3b8",
    marginBottom: "0.75rem",
    fontSize: "0.9rem",
  },
  contadorFila: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    marginBottom: "0.75rem",
  },
  contadorNum: {
    color: "#f1f5f9",
    fontSize: "2.5rem",
    fontWeight: "bold",
    minWidth: "60px",
    textAlign: "center",
  },
  btnContador: {
    backgroundColor: "#38bdf8",
    color: "#0f172a",
    border: "none",
    borderRadius: "8px",
    width: "44px",
    height: "44px",
    fontSize: "1.3rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  contadorHint: {
    color: "#64748b",
    fontSize: "0.85rem",
    margin: 0,
    minHeight: "1.2em",
  },
  decoracion: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },
  circulo1: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
    top: "-100px",
    right: "-100px",
  },
  circulo2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(244,114,182,0.06) 0%, transparent 70%)",
    bottom: "-50px",
    left: "-50px",
  },
};

export default Hero;
