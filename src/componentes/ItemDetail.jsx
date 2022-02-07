import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import {Button} from "react-bootstrap";
import "./Item.css"
import { cartContext } from "../context/CartContext";

export default function ItemDetail({ products }) {

    const {addCart} = useContext(cartContext)

    const [quantity, setQuantity] = useState();
    const [cartButton, setCartButton] = useState(true);

    function onAdd(quantity){
        setQuantity(quantity);
        setCartButton(false);
        addCart(products, quantity)
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
                                    <Button variant="dark">Termina la compra</Button>                                    
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