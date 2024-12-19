import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../../particles.json";

function Background() {
  const particlesInit = (main) => {
    loadFull(main);
  };

  return (
    <div className="fixed inset-0 -z-10"> {/* Posición fija y detrás del contenido */}
      <Particles options={particlesOptions} init={particlesInit} />
    </div>
  );
}

export default Background;
