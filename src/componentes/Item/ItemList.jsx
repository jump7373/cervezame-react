import React from "react";
import Item from "./Item";
import ItemListContainer from "./ItemListContainer";

export default function ItemList({products}) {

    return (

        <>
            
            {
                products.map (item => <Item key={item.id} item={item}/>)
            }

        </>

    )
}