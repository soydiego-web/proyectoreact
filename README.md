# Landing Page — React + TypeScript
**Diego Avila | Ingeniería de Software | UNEMI**

---

## Descripción del proyecto

Landing page desarrollada como actividad académica para comprender el funcionamiento de React y cómo JavaScript interviene en el comportamiento dinámico de una aplicación web. El proyecto incluye componentes reutilizables, eventos interactivos y diseño responsive.

---

## ¿Qué es React?

React es una biblioteca de JavaScript para construir interfaces de usuario. En lugar de modificar el HTML directamente, React usa componentes que se actualizan solos cuando los datos cambian.

---

## ¿Qué es JSX?

JSX es una sintaxis que permite escribir HTML dentro de JavaScript. Las llaves `{}` permiten insertar expresiones de JavaScript dentro del HTML.

```jsx
const nombre = "Diego";
return <h1>Hola, soy {nombre}</h1>;
```

---

## ¿Qué es un componente?

Un componente es una función de JavaScript que devuelve JSX. Es como una pieza reutilizable de la interfaz.

```tsx
function Saludo() {
  return <h1>Hola mundo</h1>;
}
```

Se usa como si fuera una etiqueta HTML: `<Saludo />`

---

## ¿Cómo son reutilizables los componentes?

Un componente se puede usar múltiples veces con diferentes datos gracias a las **props**. Por ejemplo, el componente `Card` se reutiliza para mostrar cada proyecto:

```tsx
<Card titulo="Sistema de Matrícula" icono="🌐" />
<Card titulo="App de Tareas" icono="📱" />
<Card titulo="Dashboard Académico" icono="📊" />
```

El mismo componente, distintos datos. Esto evita repetir código.

---

## Componentes del proyecto

| Componente | Descripción |
|---|---|
| `Navbar` | Barra de navegación con menú responsive |
| `Hero` | Sección principal con contador e interacciones |
| `Card` | Tarjeta reutilizable para mostrar proyectos |
| `Proyectos` | Grid de proyectos con filtro por categoría |
| `Sobre` | Sección sobre mí y habilidades |
| `Footer` | Pie de página con contacto interactivo |

---

## ¿Cómo funcionan los eventos?

Los eventos en React se escriben en camelCase y reciben una función:

```tsx
// HTML tradicional:
<button onclick="miFuncion()">Click</button>

// React:
<button onClick={miFuncion}>Click</button>
```

Con `useState` guardamos el estado y React actualiza la pantalla automáticamente:

```tsx
const [contador, setContador] = useState(0);

<button onClick={() => setContador(contador + 1)}>+</button>
<p>{contador}</p>
```

---

## Eventos implementados en el proyecto

| Componente | Evento | Efecto |
|---|---|---|
| `Hero` | Clic en el título | Cambia el color del texto |
| `Hero` | Clic en botón | Muestra saludo según la hora |
| `Hero` | Clic en +/↺ | Incrementa o reinicia el contador |
| `Card` | Hover | Efecto de elevación animado |
| `Card` | Clic | Expande o colapsa la descripción |
| `Proyectos` | Clic en filtros | Filtra proyectos por categoría |
| `Sobre` | Clic | Muestra u oculta las habilidades |
| `Sobre` | Clic | Cambia entre tema claro y oscuro |
| `Footer` | Clic | Copia el email al portapapeles |

---

## ¿Cómo ejecutar el proyecto?

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

---

## Tecnologías utilizadas

- React 18
- TypeScript
- Vite
- CSS con estilos en líneas