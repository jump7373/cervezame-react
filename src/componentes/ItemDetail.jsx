import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import {Button} from "react-bootstrap";
import "./Item.css"

export default function ItemDetail({ products }) {

    const [quantity, setQuantity] = useState();
    const [cartButton, setCartButton] = useState(true);

    function onAdd(quantity){
        setQuantity(quantity);
        setCartButton(false);
    }
  
    return (
        <>
            <div className="detail__container">
                {(products.marca) ?

                    <>
                        <img src={products.img} alt="" />
                        <div>
                            <h1>{products.nombre}</h1>
                            <h2>${products.precio}</h2>
                            <p>{products.descripcion}</p>
                        
                        {cartButton ? (
                            <ItemCount inicial={1} stock={products.stock} onAdd={onAdd}/>
                        ) : (
                            <div>
                                <p>Agregó {quantity} {products.nombre} al carrito </p>

                                <Link to={"/cart"}>
                                    <Button variant="dark">Ir al carrito</Button>                                    
                                </Link> <br/>
                                <Link to="/">
                                    <Button variant="dark">Seguir comprando</Button>
                                </Link>
                            </div>
                        )

                        }
                        </div>
                    </> 
                    :

                    <> <p>Cargando</p> </>
                }
            </div>
        </>
    )
}