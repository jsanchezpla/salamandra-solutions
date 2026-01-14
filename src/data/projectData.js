import futurosTalentos from "../assets/img-projects/futurosTalentos.png";
import talentia from "../assets/img-projects/talentia.png";
import retorika from "../assets/img-projects/retorika.png";

export const proyectos = [
  {
    titulo: "App web Futuros Talentos",
    descripcion:
      "App de registro de actividades e información de las mismas con autentificacion de usuarios, token de autentificación, PDFs personalizados, hojas de excel personalizadas y firmas de formularios.",
    imagen: futurosTalentos.src,
    tecnologias: ["React Native", "PostgreeSQL", "Express", "Node"],
    demo: "https://front-react-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Front-react-todo",
    categoria: "fullstack",
  },
  {
    titulo: "ERP de Talentia",
    descripcion:
      "Aplicación web de gestión de la app de Futuros Talentos y finanzas de Talentia. Se trata de un CRUD a la base de datos muy personalizado con generación de excels, descarga de PDFs, resolución de mensajes de incidencias y descarga de fotos de tickets de compra.",
    imagen: talentia.src,
    tecnologias: ["React", "PostgreeSQL", "Express", "Node"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    categoria: "fullstack",
  },
  {
    titulo: "Asesoría Retorika",
    descripcion:
      "Este proyecto proporciona mediante scripts la personalización del pluggin de TutorLMS, se añadieron funcionalidades de pago y otras que no tenía el pluggin de forma gratuita. Además de un login y registro personalizados y todo conectado con su programa de gestión(ERP).",
    imagen: retorika.src,
    tecnologias: ["Wordpress", "Elementor", "Javascript", "PHP"],
    demo: "https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/",
    codigo: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
    categoria: "frontend",
  },
  {
    titulo: "ERP de Retorika",
    descripcion:
      "Aplicación web de gestión de las nuevas utilidades del sitio web de Retorika. Se pueden añadir los diferentes empleados de una empresa que haya contratado un paquete con una serie de cursos, se pueden mirar los resultados de las encuestas y los examenes de los cursos.",
    imagen: retorika.src,
    tecnologias: ["React", "Node", "Express", "PostgreeSQL"],
    demo: "https://traker-gastos-ingresos.onrender.com/",
    codigo: "https://github.com/Lautaro-R-collins/Traker-Gastos-Ingresos",
    categoria: "fullstack",
  },
];
