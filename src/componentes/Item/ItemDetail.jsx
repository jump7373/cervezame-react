import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "../Components.css"
import { cartContext } from "../../context/CartContext";


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
                            <h1 className="marcaDetail">{products.marca}{products.nombre}</h1>
                            <h2 className="precioDetail">${products.precio}</h2>
                            <p>{products.descripcion}</p>
                        
                        {cartButton ? (
                            <ItemCount inicial={1} stock={products.stock} onAdd={onAdd}/>
                        ) : (
                            <div>
                                <p className="productoAgregado">Agregó {quantity} {products.nombre} al carrito </p>

                                <Link to={"/cart"}>
                                    <button className="button">Termina la compra</button>                                    
                                </Link> 
                                <Link to="/Cervezas">
                                    <button className="button">Seguir comprando</button>
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