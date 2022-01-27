import React from "react";
import { useState } from "react";
import {Button} from "react-bootstrap";
import './ItemCount.css';
import ItemListContainer from "./ItemListContainer";

export default function ItemCount ({inicial, stock}) {

    const [cantidad, setCantidad] = useState(inicial);
    
    function sumar(){
        
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }else{
            alert("No hay más unidades")
        }
        
    }

    function restar(){

        if(cantidad > inicial ) {
            setCantidad(cantidad - 1)
        }
    }

    function onAdd(){
        alert ("Usted compro " + cantidad )
    }

    return (
        <div>
            <Button variant="dark" onClick={() => restar()}>-</Button>
            
            <span>{cantidad}</span>

            <Button variant="dark" onClick={() => sumar()}>+</Button>
            <br />
            <br />
            <Button variant="dark" onClick={() => onAdd() }>Agregar al carrito</Button>
        </div>
    )
}