import React from "react";
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";
import {Button} from "react-bootstrap";
import "./Item.css"



export default function Item ({item}) {

    
    return (
        <>
            <div className="category__container">
                <img src={item.img}/>
                <h2>{item.nombre}</h2>
                <p>Alcohol: {item.alcohol} || IBU: {item.ibu}</p>
                <h3>${item.precio}</h3>
                
                <Link to={"/item/" + item.id}><Button variant="dark">Ver detalle</Button></Link>
            </div>
        </>
    )
}