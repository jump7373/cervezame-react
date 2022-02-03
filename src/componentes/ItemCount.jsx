import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './ItemCount.css';


export default function ItemCount({ inicial, stock, onAdd }) {

    const [cantidad, setCantidad] = useState(inicial);

    function sumar() {

        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        } else {
            alert("No hay más unidades")
        }

    }

    function restar() {

        if (cantidad > inicial) {
            setCantidad(cantidad - 1)
        }
    }

  
    return (
        <div>
            <div className="buttonCount">
                <Button variant="dark" onClick={() => restar()}>-</Button>

                <span>{cantidad}</span>

                <Button variant="dark" onClick={() => sumar()}>+</Button>
            </div>
            <br />
            <br />
            <Button variant="dark" onClick={() => onAdd(cantidad)}>Agregar al carrito</Button>
        </div>
    )
}