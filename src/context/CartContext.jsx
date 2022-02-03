import React, { createContext, useState } from "react";

export const cartContext = createContext()

export default function CartContext({children}){

    const [cart, setCart] = useState([])

    const addCart = ((producto, cantidad) => {
        if(isInCart(producto.id)){
            const indexItem = cart.findIndex(element => element.item.id === producto.id);
            cart[indexItem].cantidad = cart[indexItem].cantidad + cantidad;
            setCart([...cart]);
            

        } else {
            setCart([...cart, {item: producto, cantidad}])
        }
        
    })

    const deleteProduct = ((id) => {
        const fullCart = cart.filter(item => item.item.id !== id)
        setCart(fullCart)
    })

    const deleteCart = (() =>{
        setCart([]);
    });

    const isInCart = (id) => {
        return cart.some(element => element.item.id === id)

    }

    return(
        <cartContext.Provider value={{cart, addCart, deleteProduct, deleteCart}}>
            {children}
        </cartContext.Provider>
    )
}