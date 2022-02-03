import React, { useContext } from "react";
import {Button} from "react-bootstrap";
import { cartContext } from "../context/CartContext";

export default function CartItem({producto}) {

    const {deleteProduct} = useContext(cartContext)

    return (
        <>

            <div>
                <img src={producto.item.img} alt="" />
                <p>{producto.item.nombre}</p>
                <p>{producto.cantidad}</p>
                <p>Precio por unidad: ${producto.item.precio}</p>
                <Button onClick={() => deleteProduct(producto.item.id)} variant="dark">Eliminar producto</Button>
            </div>

        </>
    )
}