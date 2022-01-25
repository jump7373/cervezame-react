import React from "react";
import { useEffect } from "react";
import Item from "./Item";
import ItemListContainer from "./ItemListContainer";

export default function ItemList({products}) {

    return (

        <>
            
            {
                products.map (item => <Item item={item}/>)
            }

        </>

    )
}