import React, {useState, useEffect} from "react";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";
import {BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom"
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";
import {getFirestore} from "../../firebase/firebase"

export default function ItemDetailContainer (){

    const {itemId} = useParams();
    
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true)
     
    useEffect(() => {

        const db = getFirestore();
        const itemList = db.collection("productos")

        const producto = itemList.doc(itemId)

        producto.get()
            .then((doc) => {
                if(!doc.exists) {
                    console.log("No existe el producto")
                    return
                }
                
                setProducts({id: doc.id, ...doc.data()})
                setLoading(false)
            })
            .catch((err) =>{
                console.log(err)
            })
    }, [itemId])

    return(
        <>
            {
                (loading) ? <Loader /> : <ItemDetail products={products}/>
            }

        </>
    )
}