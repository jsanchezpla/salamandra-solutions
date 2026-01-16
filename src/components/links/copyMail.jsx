import React, { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa6"; // Añadimos FaCheck para mejor UX

export default function EmailCopy() {
  const [copied, setCopied] = useState(false);
  const email = "info@salamandrasolutions.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  };

  return (
    <div className="flex w-full max-w-xl items-center justify-between gap-4 rounded-xl border border-[#D946EF]/20 bg-[#1E1236]/40 px-6 py-4 backdrop-blur-md transition-all hover:border-[#D946EF]/50">
      
      {/* Texto del Email (Estilo Código) */}
      <span className="truncate font-['JetBrains_Mono'] text-sm text-[#C4B5FD] md:text-base">
        {email}
      </span>

      {/* Botón de Acción */}
      <button
        onClick={copyToClipboard}
        className={`group relative flex items-center gap-2 rounded-lg border px-4 py-2 font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider transition-all duration-300
          ${
            copied
              ? "border-green-500 bg-green-500/10 text-green-400" // Estado Copiado (Verde Éxito)
              : "border-[#D946EF] text-[#D946EF] hover:bg-[#D946EF] hover:text-white hover:shadow-[0_0_15px_rgba(217,70,239,0.4)]" // Estado Normal (Fucsia Cyber)
          }
        `}
      >
        {copied ? <FaCheck /> : <FaRegCopy />}
        {copied ? "Copiado" : "Copiar"}
      </button>
    </div>
  );
}
