import React, { useState } from "react";


export default function ItemCount({ inicial, stock, onAdd }) {

    const [cantidad, setCantidad] = useState(inicial);
    

    function sumar() {

        if (cantidad < stock) {
            setCantidad(cantidad + 1)
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
                <button className="buttonAdd" onClick={() => restar()}>-</button>

                <span className="counter">{cantidad}</span>

                <button className="buttonAdd" disabled={cantidad >= stock} onClick={() => sumar()}>+</button>
            </div>
            <br />
            <br />
            <button className="button" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
        </div>
    )
}