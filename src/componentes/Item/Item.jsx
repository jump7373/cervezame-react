import React from "react";
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";
import {Button} from "react-bootstrap";
import "../Components.css"



export default function Item ({item}) {

    
    return (
        <>
            <div className="category__container">
                <img src={item.img}/>
                <h2 className="marcaItem">{item.marca} {item.nombre}</h2>
                <p>Alcohol: {item.alcohol} || IBU: {item.ibu}</p>
                <h3>${item.precio}</h3>
                
                <Link to={"/item/" + item.id}><button className="button">Ver detalle</button></Link>
            </div>
        </>
    )
}