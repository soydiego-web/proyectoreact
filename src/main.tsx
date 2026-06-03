// main.tsx — Punto de entrada de la aplicación React
// Este archivo "monta" React en el HTML (index.html)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// ReactDOM.createRoot busca el elemento con id="root" en index.html
// y dentro de él renderiza toda la aplicación React
ReactDOM.createRoot(document.getElementById("root")!).render(
  // StrictMode ayuda a detectar problemas durante el desarrollo
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
