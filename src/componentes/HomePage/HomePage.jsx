import React from "react";
import { Link } from "react-router-dom";
import "../Components.css";
import Promociones from "../Promociones/Promociones";

export default function HomePage() {
  
    return (
    <>
      <div className="homeContainer">
        <div className="homeContainerBG">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/proyecto-mirabile-react.appspot.com/o/slider-3.png?alt=media&token=8076d080-79c0-4b78-a4a3-a1a0e5581e32"
            alt="Cerveza Ortuzar"
          />
          <div className="homePromotion">
            <h1>CERVEZA ORTUZAR</h1>
            <h2>
              Todos los estilos premiados en las competencias más importantes
              del Mundo.
            </h2>
            <Link to="/category/Ortuzar">
              <button className="button">Comprar</button>
            </Link>
          </div>
        </div>
      </div>
      <Promociones />
    </>
  );
}
