import { 
  HiOutlineBuildingOffice2, 
  HiOutlineAcademicCap, 
  HiOutlineBriefcase, 
  HiOutlineSparkles
} from "react-icons/hi2";
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

export const targets = [
  {
    title: "Empresas de Servicios",
    description: "Optimizamos la captación y gestión de clientes mediante plataformas robustas y flujos de trabajo automatizados.",
    icon: HiOutlineBuildingOffice2,
    tag: "Eficiencia",
    logos: [
      talentia, 
      retorika, 
      lacuriosidaddelviajero
    ]
  },
  {
    title: "Centros Educativos",
    description: "Digitalizamos la formación con ecosistemas e-learning que permiten escalar el conocimiento sin límites físicos.",
    icon: HiOutlineAcademicCap,
    tag: "Escalabilidad",
    logos: [
      talentia, 
      retorika,
      centroaumenta
    ]
  },
  {
    title: "Gestión Interna",
    description: "Negocios que han superado el Excel y necesitan sistemas a medida para controlar su operativa real.",
    icon: HiOutlineBriefcase,
    tag: "Control",
    logos: [
      talentia, 
      retorika, 
      sanchezlazaro
    ]
  },
  {
    title: "Diseño & Renovación Web",
    description: "Transformamos webs obsoletas en experiencias digitales modernas, rápidas y alineadas con la identidad actual de tu marca.",
    icon: HiOutlineSparkles,
    tag: "Vanguardia",
    logos: [
      v30energy,
      colorincolorado,
      kaleido,
      andreadavila
    ]
 }
];