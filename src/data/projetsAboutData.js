import RetorikaCRM from "../assets/img-projects/RetorikaCRM.png";
import AsesoriaRetorika from "../assets/img-projects/AsesoriaRetorika.png";
import TalentiaApp from "../assets/img-projects/TalentiaApp.png";
import TalentiaCRM from "../assets/img-projects/TalentiaCRM.png";

export const proyectos = [
  {
    titulo: "Aplicación para Futuros Talentos",
    descripcion: "Se trata de una aplicación web donde los padres pueden apuntar a sus hijos a las extraescolares del colegio y ver información sobre ello.",
    imagen: TalentiaApp.src,
    tecnologias: ["React Native", "Express", "PostgreeSQL", "Node"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    codigo: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
  },
  {
    titulo: "CRM para Talentia",
    descripcion: "Es una aplicación web desde la que pueden gestionar la base de datos de su otra aplicación desde con una interfaz y herramientas amigables",
    imagen:
      TalentiaCRM.src,
    tecnologias: ["React", "Node", "Express", "PostgreeSQL"],
    demo: "https://c21-05-ft-node-react-mirror-frontend-64qbwssi2-muyvisual.vercel.app/",
    codigo: "https://github.com/No-Country-simulation/c21-05-ft-node-react",
  },
  {
    titulo: "Asesoría Retorika",
    imagen: AsesoriaRetorika.src,
    tecnologias: ["Wordpress", "PHP", "JavaScript", "Express", "Node"],
    demo: "https://front-react-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Front-react-todo",
  },
  {
    titulo: "CRM para Retorika",
    imagen: RetorikaCRM.src,
    tecnologias: ["Express", "Node.js", "PostgreeSQL", "React"],
    demo: "https://back-express-todo.onrender.com",
    codigo: "https://github.com/Lautaro-R-collins/Back-express-todo.git",
  },
];
