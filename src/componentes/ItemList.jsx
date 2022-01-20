import React from "react";
import { useEffect } from "react";
import Item from "./Item";
import ItemListContainer from "./ItemListContainer";

export default function ItemList({items}) {

    return (

        <div className="category">
            
            {
                items.map (item => {
                    return <Item item={item} />
                })
            }

        </div>

    )
}