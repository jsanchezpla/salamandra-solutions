import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Componente individual
const StatItem = ({ end, suffix = "", label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="text-center group relative p-4">
      {/* Efecto hover sutil (opcional) */}
      <div className="absolute inset-0 bg-[#D946EF]/5 opacity-0 rounded-xl transition-opacity duration-500 group-hover:opacity-100"></div>
      
      <div className="relative mb-2 font-['Outfit'] text-5xl font-extrabold md:text-6xl lg:text-7xl">
        {inView ? (
          <CountUp
            end={end}
            duration={2.5}
            separator=","
            suffix={suffix}
            // Degradado de Blanco a un Lila muy suave para dar volumen
            className="bg-gradient-to-b from-white to-[#F0ABFC] bg-clip-text text-transparent drop-shadow-sm"
          />
        ) : (
          // Color oscuro mientras carga para que no destelle
          <span className="text-[#332a45]">0</span> 
        )}
      </div>
      
      <p className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-widest text-[#D946EF] opacity-80 group-hover:opacity-100 transition-opacity">
        {label}
      </p>
    </div>
  );
};

export const StatsSection = () => {
  const stats = [
    { label: "Proyectos Entregados", end: 3, suffix: "+" },
    { label: "Años de Experiencia", end: 1, suffix: "+" },
    { label: "Clientes Satisfechos", end: 100, suffix: "%" },
    { label: "Tecnologías", end: 14, suffix: "" },
  ];

  return (
    // Fondo Violeta Oscuro con bordes Fucsia sutiles
    <section className="border-y border-[#D946EF]/20 bg-[#0F0720] py-20 relative overflow-hidden">
      
      {/* Fondo de rejilla decorativo (muy sutil) */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-12 px-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <StatItem 
            key={index} 
            label={stat.label} 
            end={stat.end} 
            suffix={stat.suffix} 
          />
        ))}
      </div>
    </section>
  );
};