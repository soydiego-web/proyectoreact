// App.tsx — Componente raíz que organiza toda la aplicación
// React importa automáticamente JSX en versiones modernas
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";

// El componente App "compone" todos los demás componentes
// Así se estructura una aplicación React: árbol de componentes
function App() {
  return (
    <>
      {/* Fragment (<>) agrupa elementos sin agregar un div extra al DOM */}
      <Navbar titulo="Diego.dev" />
      <main>
        <Hero />
        <Sobre />
        <Proyectos />
      </main>
      <Footer />
    </>
  );
}

export default App;
