import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="mt-5 flex items-center justify-center gap-2 font-['Inter'] text-2xl font-medium md:text-4xl tracking-tight">
      
      {/* Parte Fija: Verde Botella (Elegancia) */}
      <span className="text-[#1F3B34]">Desarrollo</span>
      
      {/* Parte Cambiante: Verde Grisáceo (Naturaleza) */}
      <div className="text-[#3E5C57] font-semibold italic">
        <Typewriter
          options={{
            strings: [
              "Web",
              "Frontend",
              "Backend",
              "Mobile",
              "WordPress"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 40, 
            delay: 70,       
            cursor: "|",     // Cursor de barra más fino y moderno
            cursorClassName: "text-[#3E5C57] font-light opacity-50" // Cursor sutil
          }}
        />
      </div>
    </div>
  );
};

export default TypewriterComponent;
