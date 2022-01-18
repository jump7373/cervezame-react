import React from "react";
import Item from './Item';

export default function ItemListContainer (bienvenida){

    const itemList = [{nombre: "El Viaje IPA", stock: 6}, {nombre: "Baba NEIPA", stock: 3}, {nombre: "Baum STOUT", stock: 6}]
    
    return(
        <>
            <h1>Bienvenidos a mi tienda {bienvenida.usuario}</h1>
            {
                itemList.map (item => {
                  return <Item item={item} />
                })
            }

        </>
    )
}