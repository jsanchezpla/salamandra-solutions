import React from "react";
import Typewriter from "typewriter-effect";

//Aqui poner Desarrollo fijo y el resto que se cambie
const TypewriterComponent = () => {
  return (
    <div className="flex notranslate mt-5 text-3xl font-bold">
      Desarrollo&nbsp;
      <Typewriter
        options={{
          strings: ["web", "de frontend", "de backend", "de apps", "Wordpress"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
