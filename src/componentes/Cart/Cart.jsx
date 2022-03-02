import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";
import CartItem from "./CartItem";
import "../Components.css"


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
                    <button className="button"><Link to='/' style={{ textDecoration: "none", color: "white" }}>Ir a comprar</Link></button>

                </div>
                :
                <div>
                    <button className="button" onClick={() => deleteCart()} variant="dark">Vaciar Carrito</button>
                    <hr />
                    <div className="categoryCart">
                        {cart.map(item => <CartItem key={item.item.id} producto={item} />)}
                    </div>
                    <hr />
                    
                    <h1 className="totalCompra">TOTAL: ${totalCompra}</h1>

                    <div className="cartButton">
                    <Link to={"/formulario-de-compra"}>
                        <button className="button buttonFinalizar">Termina la compra</button>
                    </Link> <br />
                    </div>
                </div>


            }



        </>
    )
}