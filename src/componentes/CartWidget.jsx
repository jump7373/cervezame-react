import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import carrito from "./img/carrito.png"


export default function CartWidget() {

    const { cart } = useContext(cartContext)

    return (
        <>
            {cart.length === 0 ?

            <div> </div>
            :
            <Link to={"/cart"} style={{color: "black", textDecoration:"none"}} title="Ver Carrito">
                <div style={{ backgroundColor: "white" }}>
                    <img src={carrito} style={{ backgroundColor: "white", width: "35px", margin: "5px" }} alt="Icono carrito de compras" className="carrito" />
                    <span style={{ border: "none", fontSize: "20px", fontweight: "900" }}>{cart.length}</span>
                </div>
            </Link>
            }
        </>
    )
}