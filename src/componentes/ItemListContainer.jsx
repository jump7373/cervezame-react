import React, { useEffect, useState, useParams } from "react";
import ItemList from "./ItemList";
import "./Components.css"
import "./Item.css"
import { getFirestore } from "../firebase/firebase";
import NavBar from "./NavBar";
import Loader from "./Loader/Loader";


export default function ItemListContainer() {

    const { itemMarca } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const db = getFirestore()
        const itemCollection = (itemMarca ? db.collection("productos").where("marca", "==", itemMarca) : db.collection("productos"))
        
        itemCollection.get()
        .then((querySnapShot) => {
            if (querySnapShot.size === 0) {
                console.log("No hay productos en el query");
                return
            }

            setProducts(querySnapShot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            }))
            setLoading(false)
        })

    }, [itemMarca])
    

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = (itemMarca ? db.collection("productos").where("pais", "==", itemMarca) : db.collection("productos"))
        
        itemCollection.get()
        .then((querySnapShot) => {
            if (querySnapShot.size === 0) {
                console.log("No hay productos en el query");
                return
            }

            setProducts(querySnapShot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            }))
            setLoading(false)
        })

    }, [itemMarca])

   


    return (
        <>
            {
                (loading)
                    ?
                    <Loader />
                    :
                    <div className="category">
                        <ItemList products={products} />
                        
                    </div>
            }

        </>
    )
}