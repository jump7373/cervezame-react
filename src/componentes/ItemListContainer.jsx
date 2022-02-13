import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./Components.css"
import "./Item.css"
import Loader from "./Loader";
import { getFirestore } from "../firebase/firebase";


export default function ItemListContainer() {

    const { itemMarca } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {

        const db = getFirestore()

        if (itemMarca) {

            db.collection("productos").where("marca", "==", itemMarca).get()
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

        } else {

            db.collection("productos").get()
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

                .catch((err) => {
                    console.log(err)
                })
        }
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