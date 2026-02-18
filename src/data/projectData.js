import talentia from "../assets/img-projects/talentia.png";
import retorika from "../assets/img-projects/retorika.png";
import lacuriosidaddelviajero from "../assets/img-projects/lacuriosidaddelviajero.png";
import v30energy from "../assets/img-projects/v30energy.png";
import andreadavila from "../assets/img-projects/andreadavila.png";
import centroaumenta from "../assets/img-projects/centroaumenta.png";
import colorincolorado from "../assets/img-projects/colorincolorado.png";
import kaleido from "../assets/img-projects/kaleido.png";
import lauraubeda from "../assets/img-projects/lauraubeda.png";
import sanchezlazaro from "../assets/img-projects/sanchezlazaro.png";


export const proyectos = [
  {
    titulo: "Futuros Talentos",
    descripcion: `
      <p>Llevamos a cabo el rediseño completo de la plataforma <strong>Futuros Talentos</strong>, apostando por una estética moderna, vanguardista y profesional desarrollada con Elementor, con el objetivo de mejorar tanto la identidad visual como la experiencia de usuario.</p>
      
      <p>El proyecto se centró en crear una interfaz altamente intuitiva, optimizada para una navegación fluida y una comunicación clara de la información, combinando diseño atractivo con soluciones técnicas modernas.</p>
      
      <p>Además del rediseño visual, desarrollamos una aplicación web avanzada que permite:</p>
      
      <ul>
        <li>Registro y gestión de actividades con autenticación segura de usuarios mediante tokens.</li>
        <li>Generación automática de PDFs personalizados.</li>
        <li>Creación de hojas de Excel adaptadas a cada actividad.</li>
        <li>Formularios con sistema de firmas digitales.</li>
        <li>Gestión centralizada de incidencias y mensajes.</li>
        <li>Descarga de imágenes de tickets de compra.</li>
      </ul>
      
      <p>Como complemento, se implementó una aplicación de administración interna para la gestión completa de la plataforma y el control financiero de Talentia. Un sistema CRUD totalmente personalizado conectado a base de datos, con funcionalidades avanzadas de exportación de datos, generación de informes y automatización documental.</p>
      
      <p><strong>Resultado:</strong> una plataforma moderna, escalable y eficiente que optimiza procesos internos, mejora la experiencia del usuario y refuerza la imagen digital de la marca.</p>
    `,
    imagen: talentia.src,
    tecnologias: ["React Native", "React", "PostgreSQL", "Express", "Node", "Elementor", "Wordpress"],
    demo: "https://front-react-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Front-react-todo",
    categoria: ["fullstack", "app", "web"],
},
  {
    titulo: "Asesoría Retorika",
    descripcion: `
    <p>Desarrollamos una solución e-learning completamente personalizada sobre <strong>TutorLMS</strong>, ampliando sus capacidades mediante scripts propios para incorporar funcionalidades avanzadas que no estaban disponibles en la versión gratuita del plugin.</p>
    
    <p>El proyecto incluyó la implementación de sistemas de pago integrados, así como un flujo de login y registro de usuarios totalmente personalizado, todo ello conectado directamente con su programa de gestión empresarial (ERP) para una sincronización automática de datos, usuarios y servicios contratados.</p>
    
    <p>Además, creamos una aplicación web de administración que permite:</p>
    
    <ul>
      <li>Gestionar empresas que contratan paquetes de formación.</li>
      <li>Añadir y administrar empleados por cada empresa cliente.</li>
      <li>Asignar cursos de forma centralizada.</li>
      <li>Visualizar resultados de encuestas de satisfacción.</li>
      <li>Analizar exámenes y progreso de los alumnos.</li>
    </ul>
    
    <p>Como parte integral del proyecto, nos encargamos también de toda la producción audiovisual y del contenido formativo: grabación de vídeos, edición, estructuración de los cursos y desarrollo pedagógico de los materiales.</p>
    
    <p><strong>Resultado:</strong> una plataforma de formación corporativa potente, automatizada y totalmente integrada con los sistemas internos de la empresa, que facilita la gestión de alumnos, mejora el seguimiento del aprendizaje y profesionaliza la experiencia educativa.</p>
  `,
    imagen: retorika.src,
    tecnologias: ["Wordpress", "Elementor", "Javascript", "PHP", "React", "Node", "Express", "PostgreeSQL"],
    demo: "https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/",
    codigo: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
    categoria: ["fullstack", "web"],
  },
  {
    titulo: "La Curiosidad del Viajero",
    descripcion: `
      <p>Realizamos el rediseño completo de la web con un enfoque visual de alto impacto, utilizando Elementor para reforzar la identidad digital de la marca y mejorar la experiencia de navegación.</p>
      <p>Más allá del diseño, implementamos módulos personalizados en <strong>JavaScript</strong> que aportan interactividad avanzada y comportamientos únicos dentro del sitio, elevando la experiencia de usuario frente a una web estándar.</p>
      <p>Uno de los desarrollos clave fue un <strong>sistema de filtrado dinámico de viajes</strong>, que permite a los usuarios explorar experiencias de forma rápida e intuitiva según distintos criterios, facilitando la conversión.</p>
      <p><strong>Resultado:</strong> una web visualmente potente, dinámica y funcional que combina diseño atractivo con desarrollo a medida.</p>
    `,
    imagen: lacuriosidaddelviajero.src,
    tecnologias: ["Wordpress", "Elementor", "Javascript", "PHP"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    categoria: ["frontend", "web"],
  },
  {
    titulo: "V30 Energy",
    descripcion: `
      <p>Creamos la presencia digital completa de <strong>V30 Energy</strong>, desde el desarrollo integral de su sitio web hasta la implementación de landing pages estratégicas optimizadas para la captación de leads.</p>
      <p>Cada landing está conectada con herramientas de análisis para un seguimiento preciso de los resultados. Además, diseñamos y gestionamos campañas de <strong>Google Ads</strong> alineadas con los objetivos comerciales, enfocadas en energía renovable y movilidad eléctrica.</p>
      <p><strong>Resultado:</strong> una plataforma digital profesional que combina diseño, funcionalidad y marketing online eficiente para maximizar el alcance y la conversión.</p>
    `,
    imagen: v30energy.src,
    tecnologias: ["Wordpress", "Elementor", "Javascript", "PHP"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    categoria: ["frontend", "web"],
  },
  {
    titulo: "Espacio Kaleido",
    descripcion: `
      <p>Desarrollamos <strong>Espacio Kaleido</strong> desde cero, creando un sitio web completamente diseñado a medida que refleja la identidad del centro y potencia la experiencia de los usuarios.</p>
      <p>El proyecto incluyó toda la arquitectura visual, la estructura de navegación y el diseño responsive, asegurando que cada sección sea clara, atractiva y funcional en cualquier dispositivo.</p>
      <p><strong>Resultado:</strong> una web profesional y visualmente impactante que comunica eficazmente la propuesta del espacio y ofrece una navegación fluida.</p>
    `,
    imagen: kaleido.src,
    tecnologias: ["Wordpress", "Elementor", "Javascript", "PHP"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    categoria: ["frontend", "web"],
  },
  {
    titulo: "Centro Aumenta",
    descripcion: `
      <p>Desarrollamos la identidad visual completa de <strong>Centro Aumenta</strong>, incluyendo su presencia en redes sociales y todo el material gráfico necesario para transmitir valores de cercanía y profesionalidad.</p>
      <p>Paralelamente, diseñamos y desarrollamos su sitio web con una estética moderna y amigable, optimizada para ofrecer información sobre sus terapias de manera accesible a familias y profesionales.</p>
      <p><strong>Resultado:</strong> una presencia digital coherente que refuerza la imagen de marca y facilita el contacto con el centro.</p>
    `,
    imagen: centroaumenta.src,
    tecnologias: ["Wordpress", "Elementor", "Javascript", "PHP"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    categoria: ["frontend", "web"],
  },
  {
    titulo: "Colorín Colorado Sanse",
    descripcion: `
      <p>Desarrollamos el sitio web completo de <strong>Colorín Colorado Sanse</strong>, creando un diseño a medida que refleja la calidez, creatividad y profesionalidad del centro educativo.</p>
      <p>El proyecto incluyó la planificación de la estructura, diseño visual y desarrollo responsive, asegurando una experiencia de usuario clara y atractiva en todos los dispositivos.</p>
      <p><strong>Resultado:</strong> una web moderna y funcional que comunica eficazmente la propuesta educativa y facilita el contacto con las familias.</p>
    `,
    imagen: colorincolorado.src,
    tecnologias: ["Wordpress", "Elementor", "Javascript", "PHP"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    categoria: ["frontend", "web"],
  },
  {
    titulo: "Andrea Dávila Nutrición",
    descripcion: `
      <p>Creamos la presencia digital completa de <strong>Andrea Dávila</strong>, abarcando:</p>
      <ul>
        <li>Diseño y desarrollo de su sitio web.</li>
        <li>Creación de un manual de marca (colores, tipografías, estilo).</li>
        <li>Producción de una video-promoción profesional.</li>
      </ul>
      <p>El sitio web fue diseñado para transmitir confianza y cercanía, con una navegación clara y una estética moderna que refleja su enfoque nutricional personalizado.</p>
      <p><strong>Resultado:</strong> una marca cohesionada y una web atractiva que comunican eficazmente su propuesta de valor.</p>
    `,
    imagen: andreadavila.src,
    tecnologias: ["Wordpress", "Elementor", "Javascript", "PHP"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    categoria: ["frontend", "web"],
  },
  {
    titulo: "Pescados y Marisco Hermanos Sánchez Lázaro",
    descripcion: `
      <p>Desarrollamos una solución digital integral que incluye una <strong>aplicación de escritorio de facturación</strong> y un <strong>sitio web corporativo</strong> conectado con su ERP.</p>
      <p>La aplicación de escritorio, diseñada para facilitar el uso, permite:</p>
      <ul>
        <li>Generar e imprimir dos tipos distintos de facturas.</li>
        <li>Añadir y gestionar clientes de forma sencilla.</li>
        <li>Automatizar procesos de facturación y agilizar el trabajo diario.</li>
      </ul>
      <p>El sitio web incluye integración con el ERP para consultas en tiempo real de clientes y pedidos.</p>
      <p><strong>Resultado:</strong> una solución completa que combina presencia online profesional con una gestión interna eficiente.</p>
    `,
    imagen: sanchezlazaro.src,
    tecnologias: ["Javascript", "Electron", "Excel"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    categoria: ["backend", "escritorio"],
  },
  {
    titulo: "Laura Úbeda",
    descripcion: `
      <p>Desarrollamos una <strong>landing page personalizada</strong> para Laura Úbeda, diseñada para reflejar su estilo como artista indie y destacar su propuesta creativa.</p>
      <p>El proyecto incluyó el diseño visual, la estructura de contenido y la optimización para una experiencia de usuario enfocada en captar la atención y facilitar la escucha de su música.</p>
      <p><strong>Resultado:</strong> una web sencilla, elegante y funcional que transmite la personalidad artística y potencia su presencia online.</p>
    `,
    imagen: lauraubeda.src,
    tecnologias: ["Wordpress", "Elementor", "Javascript", "PHP"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    categoria: ["frontend", "web"],
  },
];
