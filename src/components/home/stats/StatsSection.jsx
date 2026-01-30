import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Componente individual
const StatItem = ({ end, suffix = "", label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="text-center group relative p-6 transition-transform duration-500 hover:-translate-y-1">
      {/* Efecto hover: un círculo beige más oscuro muy sutil detrás */}
      <div className="absolute inset-0 bg-[#1F3B34]/5 opacity-0 rounded-3xl transition-opacity duration-500 group-hover:opacity-100"></div>
      
      <div className="relative mb-3 font-['Poppins'] text-5xl font-bold md:text-6xl lg:text-7xl tracking-tighter text-[#1F3B34]">
        {inView ? (
          <CountUp
            end={end}
            duration={3}
            separator=","
            suffix={suffix}
            className="tabular-nums"
          />
        ) : (
          <span className="opacity-10">0</span> 
        )}
      </div>
      
      <p className="font-['Inter'] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#3E5C57] opacity-80">
        {label}
      </p>

      {/* Una línea decorativa pequeña debajo del número */}
      <div className="mx-auto mt-4 h-[2px] w-8 bg-[#1F3B34]/10 transition-all duration-500 group-hover:w-12 group-hover:bg-[#1F3B34]/30"></div>
    </div>
  );
};

export const StatsSection = () => {
  const stats = [
    { label: "Proyectos Entregados", end: 32, suffix: "+" },
    { label: "Años de Experiencia", end: 3, suffix: "+" },
    { label: "Clientes Satisfechos", end: 13, suffix: "+" },
    { label: "Tecnologías", end: 14, suffix: "" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F5F5F2] py-10 border-y border-[#1F3B34]/5">
      
      {/* Patrón de puntos muy sutil para dar textura de papel premium */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1F3B34_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:gap-12">
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