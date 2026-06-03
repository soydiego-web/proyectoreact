import { useState } from "react";

function Footer() {
  const [copiado, setCopiado] = useState(false);
  const email = "diego@ejemplo.com";

  // Evento: copiar email al portapapeles con feedback visual
  const copiarEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    });
  };

  const anio = new Date().getFullYear(); // JavaScript para el año dinámico

  return (
    <footer id="contacto" style={estilos.footer}>
      <div style={estilos.contenedor}>

        <div style={estilos.grid}>

          {/* Columna 1: identidad */}
          <div>
            <span style={estilos.logo}>Diego</span>
            <p style={estilos.descripcion}>
              Desarrollador web en formación, apasionado por construir
              interfaces modernas con React y TypeScript.
            </p>
          </div>

          {/* Columna 2: links */}
          <div>
            <h4 style={estilos.colTitulo}>Navegación</h4>
            <ul style={estilos.lista}>
              {["inicio", "sobre", "habilidades", "proyectos", "contacto"].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} style={estilos.link}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: contacto con evento */}
          <div>
            <h4 style={estilos.colTitulo}>Contacto</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {/* Botón para copiar email — interactividad JavaScript */}
              <button onClick={copiarEmail} style={estilos.btnEmail}>
                {copiado ? "✅ ¡Copiado!" : `📧 ${email}`}
              </button>
              <p style={estilos.hint}>
                {copiado
                  ? "Email copiado al portapapeles"
                  : "Haz clic para copiar el email"}
              </p>
            </div>

            {/* Links de redes sociales */}
            <div style={estilos.redes}>
              {[
                { label: "GitHub", url: "https://github.com" },
                { label: "LinkedIn", url: "https://linkedin.com" },
              ].map((red) => (
                <a
                  key={red.label}
                  href={red.url}
                  target="_blank"
                  rel="noreferrer"
                  style={estilos.redLink}
                >
                  {red.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={estilos.separador} />

        {/* Copyright con año dinámico — JavaScript */}
        <p style={estilos.copyright}>
          © {anio} Diego — Desarrollado con React + TypeScript ⚛️
        </p>
      </div>
    </footer>
  );
}

const estilos: Record<string, React.CSSProperties> = {
  footer: {
    backgroundColor: "#020817",
    padding: "4rem 2rem 2rem",
    borderTop: "1px solid #1e293b",
  },
  contenedor: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2.5rem",
    marginBottom: "2rem",
  },
  logo: {
    color: "#38bdf8",
    fontWeight: "bold",
    fontSize: "1.3rem",
    display: "block",
    marginBottom: "0.75rem",
  },
  descripcion: {
    color: "#64748b",
    fontSize: "0.85rem",
    lineHeight: 1.7,
  },
  colTitulo: {
    color: "#f1f5f9",
    fontSize: "0.95rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  lista: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  link: {
    color: "#64748b",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.2s",
  },
  btnEmail: {
    backgroundColor: "#1e293b",
    border: "1px solid #334155",
    color: "#38bdf8",
    borderRadius: "8px",
    padding: "0.6rem 1rem",
    fontSize: "0.85rem",
    cursor: "pointer",
    textAlign: "left",
    transition: "background 0.2s",
  },
  hint: {
    color: "#475569",
    fontSize: "0.78rem",
    margin: 0,
  },
  redes: {
    display: "flex",
    gap: "0.75rem",
    marginTop: "1rem",
  },
  redLink: {
    backgroundColor: "#1e293b",
    color: "#94a3b8",
    padding: "4px 12px",
    borderRadius: "4px",
    fontSize: "0.8rem",
    textDecoration: "none",
    border: "1px solid #334155",
  },
  separador: {
    borderTop: "1px solid #1e293b",
    marginBottom: "1.5rem",
  },
  copyright: {
    color: "#475569",
    fontSize: "0.85rem",
    textAlign: "center",
  },
};

export default Footer;
