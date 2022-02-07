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

    
    const isInCart = (id) => {
        return cart.some(element => element.item.id === id)

    }

    const calcularTotal = (() => {

        // return cart.map(item => item.item.precio * item.cantidad).reduce((a, b) => a + b)
        return cart.reduce((a, b) => a + (b.item.precio * b.cantidad), 0)
    })

    const calcularCantidad = (() => {
        return cart.reduce((a, b) => a + b.cantidad, 0) 
    })

    const deleteCart = () =>{
        setCart([]);
        
    };


    return(
        <cartContext.Provider value={{cart, addCart, deleteProduct, deleteCart, calcularTotal, calcularCantidad}}>
            {children}
        </cartContext.Provider>
    )
}