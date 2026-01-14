import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Componente individual para cada número
const StatItem = ({ end, suffix = "", label }) => {
  // El hook detecta cuando el elemento entra en pantalla
  const { ref, inView } = useInView({
    triggerOnce: true, // Importante: que solo se anime una vez
    threshold: 0.5,    // Se activa cuando el 50% del elemento es visible
  });

  return (
    <div ref={ref} class="text-center">
      <div class="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
        {/* Renderiza el contador solo si está visible (inView) */}
        {inView ? (
          <CountUp
            end={end}
            duration={2.5} // Duración de la animación en segundos
            separator=","  // Separador de miles si fuera necesario
            suffix={suffix} // Añade el "+" o "%" al final
            className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent" // Efecto degradado en el texto
          />
        ) : (
          <span class="text-gray-600">0</span> // Valor inicial antes de animar
        )}
      </div>
      <p class="text-sm font-medium uppercase tracking-widest text-[#69c7c7]">
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
    <section class="border-y border-white/10 bg-gray-950/40 py-16 backdrop-blur-sm">
      <div class="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
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