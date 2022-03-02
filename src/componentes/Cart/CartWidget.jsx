import React, { useContext, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"
import '../Components.css'
import { cartContext } from "../../context/CartContext";


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
                <div className="cartContainer">
                    <AiOutlineShoppingCart className="cart"/>
                    <div className="cartCantidad">{cantidadTotal}</div>
                </div>
            </Link>
            }
        </>
    )
}