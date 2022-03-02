import React from "react";
import { getFirestore } from "../firebase/firebase";

export default function Nosotros() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection("productos")
        if (itemCollection.doc.data(destacado)) {
            
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
        }

    }, [itemMarca])


    return (
        <>
            <div>
                <h1>Experiencia BABA</h1>
                <h2>¿Están preparados para viajar con nosotros y vivir una nueva experiencia?</h2>
                <p>¿Están preparados para viajar con nosotros y vivir una nueva experiencia?</p>
            </div>

            <div>
                <div>
                    <p>{productos.descripcion}</p>

                </div>
                <div></div>
                <div></div>
            </div>

        </>
    )
}