import React, { useContext, useState, useEffect } from "react";
import { cartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import carrito from "./img/carrito.png"


export default function CartWidget() {

    const { cart, calcularCantidad } = useContext(cartContext)
    
    const [cantidadTotal, setCantidadTotal] = useState (0)

    useEffect (() => {
        setCantidadTotal(calcularCantidad())
    }, [cart])

    return (
        <>
            {cart.length === 0 ?

            <div> </div>
            :
            <Link to={"/cart"} style={{color: "black", textDecoration:"none"}} title="Ver Carrito">
                <div style={{ backgroundColor: "white" }}>
                    <img src={carrito} style={{ backgroundColor: "white", width: "35px", margin: "5px" }} alt="Icono carrito de compras" className="carrito" />
                    <span style={{ border: "none", fontSize: "20px", fontweight: "900" }}>{cantidadTotal}</span>
                </div>
            </Link>
            }
        </>
    )
}