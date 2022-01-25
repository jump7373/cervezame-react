import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({products}){

    
    return(
        <>
            <div>
                <img src={products.img} alt="" />
                <div>
                    <h1>{products.nombre}</h1>
                    <h2>${products.precio}</h2>
                    <p>{products.descripcion}</p>
                </div>
                <ItemCount inicial= {1} stock={products.stock}/>
            </div>
        </>
    )
}