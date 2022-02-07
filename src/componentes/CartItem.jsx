import React, { useContext } from "react";
import {Button} from "react-bootstrap";
import { cartContext } from "../context/CartContext";
import "./Item.css"

export default function CartItem({producto}) {

    const {deleteProduct, calcularTotal} = useContext(cartContext)

    return (
        <>

            <div className="cart-item">
                <img src={producto.item.img} alt="" />
                <p>Producto: {producto.item.nombre}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio unitario: ${producto.item.precio}</p>
                <p>Subtotal: ${producto.cantidad * producto.item.precio}</p>
                <Button onClick={() => deleteProduct(producto.item.id)} variant="dark">Eliminar producto</Button>
            </div>

        </>
    )
}