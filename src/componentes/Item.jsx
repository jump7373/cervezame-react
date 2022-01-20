import React from "react";
import ItemCount from "./ItemCount";
import "./Item.css"



export default function Item ({item}) {

    
    return (
        <>
            <div className="category__container">
                <img src={item.img}/>
                <h2>{item.nombre}</h2>
                <p>Alcohol: {item.alcohol} || IBU: {item.ibu}</p>
                <h3>${item.precio}</h3>
                <ItemCount inicial= {1} stock={item.stock}/>
            </div>
        </>
    )
}