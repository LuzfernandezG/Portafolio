import React from "react";
import Background from "./components/Background";
import Information from "./components/Information/Encabezado";

import "./App.css";

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-transparent">
      {/* Fondo animado */}
      <Background />

      {/* Contenido principal */}
      <div className="z-10 text-center ">
        
        <Information />
   
      </div>
      
    </div>
  );
}

export default App;
