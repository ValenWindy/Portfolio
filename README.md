# Portfolio — menú de DVD

Etapa 1: menú principal, selector de idioma y transiciones.
Etapa 2: contenido real de las 4 secciones y sonido de navegación opcional.

- **Sobre mí** y **Proyectos** (Chanchito, Generala) ya tienen contenido real.
- **SlayerScript** tiene la descripción real del canal, con el enlace marcado
  como pendiente.
- **Contacto** sigue con placeholders explícitos (`tu.email@ejemplo.com`, etc.)
  porque todavía no hay datos reales de contacto — reemplazalos en
  `src/data/translations.js` cuando los tengas.

## Cómo correrlo

```bash
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
    ProjectsSection.jsx      Grilla con Chanchito y Generala.
    SlayerScriptSection.jsx  Descripción real del canal (enlace pendiente).
    ContactSection.jsx       Canales de contacto (todavía placeholders).
```

## Qué falta (próximas etapas)

- Enlaces reales: repos de Chanchito y Generala, canal de YouTube y
  datos de contacto (email, LinkedIn, GitHub) en `src/data/translations.js`.
- Foto o ilustración para "Sobre mí", si querés sumar una.
- Deploy (por ejemplo Netlify o Vercel, ya que Generala se pensaba subir ahí).

## Notas de diseño

- Paleta: negro azulado (`reel-black`), terciopelo borgoña (`reel-velvet`)
  y latón envejecido (`reel-brass` / `reel-brassBright`) para los brillos —
  pensado como la carátula metálica de un DVD de colección bajo la luz
  de un televisor viejo, no un dorado genérico.
- Tipografía: `Cormorant SC` para títulos (con el aire de una placa de
  créditos de película) y `Jost` para las etiquetas de UI.
- La numeración de los círculos (01, 02, 03, 04) está justificada porque
  son capítulos de un DVD — no es un adorno genérico.
