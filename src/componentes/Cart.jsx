import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import CartItem from "./CartItem";
import "./Item.css"


export default function Cart() {

    const { cart, deleteCart, calcularTotal } = useContext(cartContext)

    const [totalCompra, setTotalCompra] = useState(0)


    useEffect(() => {
        setTotalCompra(calcularTotal());

    }, [cart])


    return (
        <>

            {cart.length === 0 ?
                <div>
                    <p>Su carrito está vacío</p>
                    <Button variant="dark"><Link to='/' style={{ textDecoration: "none", color: "white" }}>Ir a comprar</Link></Button>

                </div>
                :
                <div>
                    <div className="category">

                        {cart.map(item => <CartItem key={item.item.id} producto={item} />)}
                    </div>
                    <Button onClick={() => deleteCart()} variant="dark">Vaciar Carrito</Button>
                    <h1>Total de la Compra: {totalCompra}</h1>

                    <Link to={"/formulario-de-compra"}>
                        <Button variant="dark">Termina la compra</Button>
                    </Link> <br />
                </div>


            }



        </>
    )
}