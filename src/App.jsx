import React from "react";
import Background from "./components/Background";
import Information from "./components/Information/Encabezado";
import Barra from "./components/Information/Barra";
import "./App.css";

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-transparent">
      {/* Fondo animado */}
      <Background />

      {/* Contenido principal */}
      <div className="z-10 text-center ">
        <Barra/>
        <Information />
        {/* <footer className="fixed bg-white">
          <p>Luz Angela Fernandez - C° 2025</p>
        </footer> */}
      </div>
      
    </div>
  );
}

export default App;
