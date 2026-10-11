import chanchitoImg from '../assets/chanchito.png'
import generalaImg from '../assets/generala.png'
import handmaidImg from '../assets/handmaid.png'
import slayerscriptImg from '../assets/slayerscript.png'
export const translations = {
  es: {
    languageName: 'Español',
    menu: {
      title: 'Valentin Rodriguez Lloret',
      subtitle: 'Menú principal',
      hint: 'Elegí un capítulo',
      items: {
        about: 'Sobre mí',
        projects: 'Proyectos',
        slayerscript: 'SlayerScript',
        contact: 'Contacto',
      },
    },
    about: {
      title: 'Sobre mí',
      name: 'Valentin Rodriguez Lloret',
      role: 'Desarrollador Full Stack',
      paragraphs: [
        'Soy Valentin, desarrollador en formación y creador de proyectos.',
        'Aprendo programación construyendo: pruebo ideas, rompo cosas, investigo por qué se rompieron y vuelvo a intentarlo. Actualmente estoy enfocado en JavaScript y desarrollo web, mientras sigo ampliando mis conocimientos en Java, Python y SQL.',
        'Me interesa especialmente transformar ideas en proyectos funcionales y utilizar cada proyecto como una oportunidad para aprender algo nuevo.',
        'También soy el creador de SlayerScript, un proyecto donde comparto mi proceso de aprendizaje y desarrollo.',
      ],
      quote: 'Los programadores se hacen programando.',
      tags: ['Tecnicatura en Programación · UTN', 'Perito Mercantil'],
    },
    projects: {
      title: 'Proyectos',
      intro: 'Proyectos propios, hechos para practicar y para mostrar cómo pienso el código.',
      linkPending: 'Próximamente',
      repoLabel: 'REPOSITORIO',
      demoLabel: 'VER DEMO',
      items: [
        {
          name: 'Chanchito',
          tagline: 'App de ahorro personal',
          description:
            'Aplicación web de ahorro personal que permite crear metas de ahorro, registrar depósitos y retiros, y seguir el progreso de cada objetivo. Los datos se almacenan localmente mediante LocalStorage, sin necesidad de un backend.',
          tags: ['React', 'Vite', 'Tailwind CSS', 'LocalStorage'],
          repoUrl: 'https://github.com/ValenWindy/chanchito-interactivo',
          demoUrl: 'https://chanchito-interactivo.netlify.app/',
          image: chanchitoImg,
        },
        {
          name: 'Generala',
          tagline: 'Juego de dados interactivo',
          description:
            'Versión web del clásico juego de dados Generala, con una mecánica interactiva que permite agarrar y sacudir el cubilete con el mouse o la pantalla táctil antes de cada tirada.',
          tags: ['React', 'Vite', 'Pointer Events'],
          repoUrl: 'https://github.com/ValenWindy/generala-interactiva',
          demoUrl: 'https://generalainteractiva.netlify.app/',
          image: generalaImg,
        },
        {
          name: "Base de Datos de El Cuento de La Criada",
          tagline: 'Pagina Web Full Stack',
          description:
            "Base de datos web inspirada en la serie de televisión *The Handmaid's Tale*, que reúne información sobre sus personajes, incluyendo descripciones, estado, primera aparición y relaciones. También permite filtrar los resultados por jerarquía, nombre y actor, entre otros criterios.",
          tags: ['React', 'Vite', 'Tailwind', 'SQL'],
          repoUrl: 'https://github.com/ValenWindy/the-handmaids-tale-db',
          demoUrl: 'https://the-handmaids-tale-database.netlify.app/',
          image: handmaidImg,
        },
        {
          name: "SlayerScript",
          tagline: 'Pagina Web',
          description:
            "Sitio web dedicado a SlayerScript, mi proyecto personal de tutorías de programación, donde comparto material de estudio, videos explicativos y ejercicios prácticos para facilitar el aprendizaje de JavaScript.",
          tags: ['React', 'Vite', 'JQuery', 'CSS3'],
          repoUrl: 'https://github.com/ValenWindy/the-handmaids-tale-db',
          demoUrl: 'https://the-handmaids-tale-database.netlify.app/',
          image: slayerscriptImg,
        },
      ],
    },
    slayerscript: {
      title: 'SlayerScript',
      body: 'Mi canal de YouTube donde enseño JavaScript de a capítulos, en videos separados por tema — en vez de un único video de 10 horas.',
      cta: 'Ver el canal',
      href: 'https://www.youtube.com/@Slayer-Script',
    },
    contact: {
      title: 'Contacto',
      intro: 'Así me podés contactar.',
      channels: [
        { label: 'Email', value: 'valentinrlloret@gmail.com', href: 'mailto:valentinrlloret@gmail.com' },
        {
          label: 'LinkedIn',
          value: 'linkedin.com/in/valentin-eduardo-rodriguez-lloret',
          href: 'https://www.linkedin.com/in/valentin-eduardo-rodriguez-lloret-b8440415b/',
        },
        { label: 'GitHub', value: 'github.com/ValenWindy', href: 'https://github.com/ValenWindy' },
      ],
    },
    back: 'Volver al menú',
    sound: { on: 'Sonido activado', off: 'Sonido desactivado' },
  },
  en: {
    languageName: 'English',
    menu: {
      title: 'Valentin Rodriguez Lloret',
      subtitle: 'Main menu',
      hint: 'Choose a chapter',
      items: {
        about: 'About Me',
        projects: 'Projects',
        slayerscript: 'SlayerScript',
        contact: 'Contact',
      },
    },
    about: {
      title: 'About Me',
      name: 'Valentin Rodriguez Lloret',
      role: 'Full Stack Developer',
      paragraphs: [
        "I'm Valentin, a developer in training and project creator.",
        "I learn programming by building: I try ideas, break things, figure out why they broke, and try again. I'm currently focused on JavaScript and web development, while broadening my knowledge of Java, Python and SQL.",
        "I especially enjoy turning ideas into working projects and treating every project as a chance to learn something new.",
        "I'm also the creator of SlayerScript, where I share my learning and development process.",
      ],
      quote: 'Programmers are made by programming.',
      tags: ['Programming degree · UTN', 'Perito Mercantil'],
    },
    projects: {
      title: 'Projects',
      intro: 'Personal projects, built to practice and to show how I think about code.',
      linkPending: 'Coming soon',
      repoLabel: 'REPOSITORY',
      demoLabel: 'LIVE DEMO',
      items: [
        {
          name: 'Chanchito',
          tagline: 'Personal savings app',
          description:
            'A personal savings web app that allows users to create savings goals, record deposits and withdrawals, and track progress toward each goal. Data is stored locally using LocalStorage, without requiring a backend.',
          tags: ['React', 'Vite', 'Tailwind CSS', 'LocalStorage'],
          repoUrl: 'https://github.com/ValenWindy/chanchito-interactivo',
          demoUrl: 'https://chanchito-interactivo.netlify.app/',
          image: chanchitoImg,
        },
        {
          name: 'Generala',
          tagline: 'Interactive dice game',
          description:
            'A web version of the classic Generala dice game, featuring an interactive dice cup that players can grab and shake using a mouse or touchscreen before each roll.',
          tags: ['React', 'Vite', 'Pointer Events'],
          repoUrl: 'https://github.com/ValenWindy/generala-interactiva',
          demoUrl: 'https://generalainteractiva.netlify.app/',
          image: generalaImg,
        },
        {
          name: "The Handmaid's Tale Database",
          tagline: 'Full Stack database',
          description:
            "A web database based on the TV series *The Handmaid's Tale*, featuring information about its characters, including descriptions, status, first appearances, and relationships. It also allows users to filter results by hierarchy, name, actor, and other criteria.",
          tags: ['React', 'Vite', 'Tailwind','SQL'],
          repoUrl: 'https://github.com/ValenWindy/the-handmaids-tale-db',
          demoUrl: 'https://the-handmaids-tale-database.netlify.app/',
          image: handmaidImg,
        },
        {
          name: "SlayerScript",
          tagline: 'Website',
          description:
            "A website dedicated to SlayerScript, my personal programming tutoring project, where I share study materials, tutorial videos, and practical exercises to support the learning of JavaScript.",
          tags: ['React', 'Vite', 'JQuery', 'CSS3'],
          repoUrl: 'https://github.com/ValenWindy/slayerscript-landing-page',
          demoUrl: 'https://slayerscript.netlify.app/',
          image: slayerscriptImg,
        },
      ],
    },
    slayerscript: {
      title: 'SlayerScript',
      body: 'My YouTube channel where I teach JavaScript chapter by chapter, in separate videos by topic — instead of one single 10-hour video.',
      cta: 'Watch the channel',
      href: 'https://www.youtube.com/@Slayer-Script',
    },
    contact: {
      title: 'Contact',
      intro: "Here's how to reach me.",
      channels: [
        { label: 'Email', value: 'valentinrlloret@gmail.com', href: 'mailto:valentinrlloret@gmail.com' },
        {
          label: 'LinkedIn',
          value: 'linkedin.com/in/valentin-eduardo-rodriguez-lloret',
          href: 'https://www.linkedin.com/in/valentin-eduardo-rodriguez-lloret-b8440415b/',
        },
        { label: 'GitHub', value: 'github.com/ValenWindy', href: 'https://github.com/ValenWindy' },
      ],
    },
    back: 'Back to menu',
    sound: { on: 'Sound on', off: 'Sound off' },
  },
}
