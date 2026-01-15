import { useState } from "react";
import { HiArrowRight, HiCode, HiExternalLink, HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const ProjectCard = ({ 
  titulo, 
  descripcion, 
  imagenes = [], // Ahora aceptamos un array de strings
  tecnologias = [], 
  demo, 
  codigo, 
  index 
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  return (
    <article 
      className="group relative flex w-full max-w-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-950 shadow-2xl transition-all hover:shadow-[#7836cf]/20"
      // Retraso en la animación de entrada según el índice
      style={{ animationDelay: `${index * 100}ms` }}
    >
      
      {/* --- ZONA DE IMAGEN (CARRUSEL) --- */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
        
        {/* Barra tipo "Navegador" decorativa */}
        <div className="absolute left-0 top-0 z-20 flex w-full gap-1.5 bg-gray-950/80 px-4 py-3 backdrop-blur-sm">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/80"></div>
        </div>

        {/* Imágenes */}
        <div className="relative h-full w-full">
            {imagenes.length > 0 ? (
                 <img
                 src={imagenes[currentImage]}
                 alt={`${titulo} imagen ${currentImage + 1}`}
                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
            ) : (
                <div className="flex h-full items-center justify-center text-gray-600">Sin imagen</div>
            )}
         
          
          {/* Overlay gradiente para que el texto resalte si decides poner algo encima */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Flechas de Navegación (Solo aparecen si hay más de 1 foto) */}
        {imagenes.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.preventDefault(); prevImage(); }}
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-[#7836cf] group-hover:opacity-100"
            >
              <HiChevronLeft size={20} />
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); nextImage(); }}
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-[#7836cf] group-hover:opacity-100"
            >
              <HiChevronRight size={20} />
            </button>

            {/* Indicadores (Puntitos) */}
            <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1.5">
              {imagenes.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentImage ? "w-6 bg-[#7836cf]" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* --- ZONA DE CONTENIDO --- */}
      <div className="flex grow flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold leading-tight text-white group-hover:text-[#a27ed1] transition-colors">
            {titulo}
            </h3>
        </div>

        {/* Tecnologías */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tecnologias.map((tech) => (
            <span key={tech} className="rounded-full border border-[#7836cf]/30 bg-[#7836cf]/10 px-2.5 py-0.5 text-xs font-medium text-[#c4a7e7]">
              {tech}
            </span>
          ))}
        </div>

        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-400">
          {descripcion}
        </p>

        {/* Botones de acción */}
        <div className="mt-auto flex gap-3 pt-4 border-t border-white/5">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#7836cf] py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#6026a8] hover:shadow-lg hover:shadow-[#7836cf]/25"
          >
            <HiExternalLink size={18} />
            Demo Live
          </a>
          
          <a
            href={codigo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            <HiCode size={18} />
            Código
          </a>
        </div>
      </div>
    </article>
  );
};