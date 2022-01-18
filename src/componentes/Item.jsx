import React from "react";
import ItemCount from "./ItemCount";


export default function Item ({item}) {

    
    return (
        <>
            <p>Cerveza: {item.nombre} Stock: {item.stock}</p>
            <ItemCount inicial= {1} stock={item.stock}/>

        </>
    )
}