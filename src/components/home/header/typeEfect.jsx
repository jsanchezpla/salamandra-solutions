import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="mt-5 flex items-center justify-center gap-3 font-['JetBrains_Mono'] text-2xl font-bold md:text-4xl">
      
      {/* Parte Fija: Blanco */}
      <span className="text-white">Desarrollo</span>
      
      {/* Parte Cambiante: Fucsia Eléctrico */}
      <div className="text-[#D946EF] drop-shadow-[0_0_10px_rgba(217,70,239,0.4)]">
        <Typewriter
          options={{
            strings: [
              "Web",        // He añadido puntos al final para dar firmeza
              "Frontend",
              "Backend",
              "Mobile",
              "WordPress"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50, // Velocidad de borrado más natural
            delay: 80,       // Velocidad de escritura
            cursor: "_",     // Cursor estilo terminal
            cursorClassName: "text-[#D946EF] animate-pulse" // Cursor fucsia parpadeante
          }}
        />
      </div>
    </div>
  );
};

export default TypewriterComponent;
