import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import CartItem from "./CartItem";


export default function Cart() {

    const { deleteCart } = useContext(cartContext)
    const { cart } = useContext(cartContext)


    return (
        <>
            {cart.length === 0 ?
                <div>
                    <p>Su carrito está vacío</p>
                    <Button variant="dark"><Link to='/' style={{textDecoration: "none", color: "white"}}>Ir a comprar</Link></Button>
                </div>
                :
                <div>
                    <Button onClick={() => deleteCart()} variant="dark">Vaciar Carrito</Button>
                    {cart.map(item => <CartItem key={item.item.id} producto={item} />)}
                </div>
            }
        </>
    )
}