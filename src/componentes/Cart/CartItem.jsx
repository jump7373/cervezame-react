import React, { useContext } from "react";
import {Button} from "react-bootstrap";
import { cartContext } from "../../context/CartContext";
import "../Components.css"

export default function CartItem({producto}) {

    const {deleteProduct, calcularTotal} = useContext(cartContext)

    return (
        <>

            <div className="cart-item">
                <img src={producto.item.img} alt="" />
                <p>{producto.item.nombre}</p>
                <p>{producto.cantidad}</p>
                <p>${producto.item.precio} C/U</p>
                <p>${producto.cantidad * producto.item.precio}</p>
                <button className="button" onClick={() => deleteProduct(producto.item.id)} variant="dark">Eliminar producto</button>
            </div>
            <hr />

        </>
    )
}