# Portfolio — menú de DVD

Portfolio personal con estética de menú de DVD noventoso/gótico, hecho en React + Vite + Tailwind CSS. Cada sección es un "capítulo" del disco.

Etapa 1: menú principal, selector de idioma y transiciones.
Etapa 2: contenido real de las 4 secciones y sonido de navegación opcional.

- **Sobre mí**: bio y badges de formación.
- **Proyectos**: Chanchito, Generala y The Handmaid's Tale Database.
- **SlayerScript**: el canal de YouTube y su sitio web.
- **Contacto**: canales de contacto.

## Proyectos destacados

### The Handmaid's Tale Database

Base de datos interactiva de personajes de *The Handmaid's Tale*, con datos propios cargados por seed (sin Wikipedia, Wikidata ni APIs de terceros).

- **Repositorio:** [ValenWindy/the-handmaids-tale-db](https://github.com/ValenWindy/the-handmaids-tale-db)
- **Stack:** React, Vite, Tailwind CSS, React Router, Express + better-sqlite3 y SQLite, todo en JavaScript.
- **Arquitectura:** SQLite → backend (rutas / controllers / services / database, con `schema.sql` y `seed.sql`) → API REST propia → React + Tailwind.
- **Modelo de datos:** base normalizada (personajes, categorías, temporadas, episodios, actores y relaciones N:N entre personajes: familia, pareja, amistad, enemigo, compañero, superior y otro). Los datos incompletos se guardan como `NULL` / "Desconocido", sin inventar información.
- **Funcionalidades:**
  - Buscador resuelto por SQL (nombre, apellido, nombre de Handmaid y actor).
  - Filtros combinables por estado, categoría y temporada, guardados en la URL.
  - Ordenamiento y paginación desde el backend.
  - Ficha individual de cada personaje con descripción y relaciones.
  - Selector de idioma español / inglés.
  - Estados de carga, error, vacío y "no encontrado".
- **Diseño:** oscuro, sobrio y minimalista, con rojo oscuro de acento y estética de base de datos editorial. Responsive y con pocas animaciones.

### SlayerScript

Canal de YouTube donde enseño JavaScript, con su propio sitio web.

- **Canal:** el contenido se publica por **capítulos**, en videos separados, en lugar de un único curso de 10 horas. El lema: *"Los programadores se hacen programando"*.
- **Sitio web:** React + Vite + jQuery + CSS3 (sin Next, Angular, Vue, Bootstrap ni Tailwind).
  - Secciones: Inicio, Bio, Capítulos, Material y Contacto.
  - Cada capítulo reúne material, video y tarea en GitHub.
  - Estética: fondo de nubes grises con llamas rosas/naranjas y bloques con fade "esotérico". El logo es una notebook con una hoja roja entre símbolos `< >`, con el nombre en rojo serif.

### Otros proyectos

- **Chanchito:** app de ahorro personal en React + Vite + Tailwind, con datos guardados en LocalStorage.
- **Generala:** juego web de Generala con vaso de dados que se sacude, en React + Vite.

## Cómo correrlo

```
npm install
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

## Estructura y qué hace cada archivo

```
src/
  main.jsx                  Punto de entrada de React.
  App.jsx                   Componente raíz: decide si se muestra el menú
                             o una sección, y anima la transición entre ambos.
  index.css                 Estilos globales, grano de película, la
                             disposición "en escalera" de los círculos
                             del menú (clase .dvd-stair) y accesibilidad
                             (foco visible, prefers-reduced-motion).

  context/LanguageContext.jsx
                             Contexto de React para el idioma activo.
                             Expone `useLanguage()` → { lang, setLang, t }.
                             Español es el idioma por defecto.

  data/translations.js      TODOS los textos del sitio, en es/en. Para
                             cargar contenido real (bio, proyectos, etc.)
                             solo hay que editar este archivo.

  context/SoundContext.jsx  Estado global de sonido on/off (apagado por
                             defecto). Expone `useSound()` → { enabled,
                             toggle, play }.

  utils/sound.js             Los 3 tonos de navegación (hover, select,
                             back), generados con Web Audio API — no hay
                             archivos .mp3 de por medio.

  components/
    LanguageSelector.jsx     Selector vertical fijo a la izquierda,
                             con el indicador luminoso del idioma activo.
    SoundToggle.jsx          Botón fijo arriba a la derecha para
                             activar/desactivar el sonido de navegación.
    DVDMenu.jsx              Pantalla del menú principal: título +
                             los 4 círculos en escalera diagonal.
    MenuOrb.jsx              Un círculo individual del menú (número de
                             "capítulo" + etiqueta + efectos hover +
                             sonido de hover/selección).
    SectionShell.jsx         Envoltorio común de las 4 secciones:
                             animación, título y botón "volver al menú".
    ProjectCard.jsx          Tarjeta de un proyecto (usada en Proyectos).
    BackgroundEffects.jsx    Viñeta, halo de luz de proyector y grano
                             de película superpuestos al fondo.

  components/sections/
    AboutSection.jsx         Bio real + badges de formación.
    ProjectsSection.jsx      Grilla con Chanchito, Generala y
                             The Handmaid's Tale Database.
    SlayerScriptSection.jsx  Descripción del canal y del sitio.
    ContactSection.jsx       Canales de contacto.
```

## Notas de diseño

- Paleta: negro azulado (`reel-black`), terciopelo borgoña (`reel-velvet`)
y latón envejecido (`reel-brass` / `reel-brassBright`) para los brillos —
pensado como la carátula metálica de un DVD de colección bajo la luz
de un televisor viejo, no un dorado genérico.
- Tipografía: `Cormorant SC` para títulos (con el aire de una placa de
créditos de película) y `Jost` para las etiquetas de UI.
- La numeración de los círculos (01, 02, 03, 04) está justificada porque
son capítulos de un DVD — no es un adorno genérico.
