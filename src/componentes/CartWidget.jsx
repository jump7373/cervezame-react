import React from "react";
import carrito from "./carrito.png"

export default function CartWidget(prop) {
    return (
        <>
            <div>
                <img src={carrito} alt="Icono carrito de compras" className="carrito"/>
                
            </div>
        </>
    )
}