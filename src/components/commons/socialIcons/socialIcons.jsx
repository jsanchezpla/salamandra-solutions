import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <a
        href="https://es.linkedin.com/company/salamandraproducciones"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-[#1F3B34]/10 bg-transparent text-[#3E5C57]/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F3B34]/30 hover:bg-[#F5F5F2] hover:text-[#1F3B34] hover:shadow-lg hover:shadow-[#1F3B34]/5"
        aria-label="Linkedin"
      >
        <FaLinkedinIn className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      </a>

      <a
        href="https://github.com/jsanchezpla"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-[#1F3B34]/10 bg-transparent text-[#3E5C57]/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F3B34]/30 hover:bg-[#F5F5F2] hover:text-[#1F3B34] hover:shadow-lg hover:shadow-[#1F3B34]/5"
        aria-label="Github"
      >
        <FaGithub className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
};

export default SocialIcons;
