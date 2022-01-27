import React from "react";
import carrito from "./img/carrito.png"

export default function CartWidget(prop) {
    return (
        <>
            <div>
                <img src={carrito} style={{backgroundColor: "white", width: "35px", margin: "5px"}} alt="Icono carrito de compras" className="carrito"/>
                
            </div>
        </>
    )
}