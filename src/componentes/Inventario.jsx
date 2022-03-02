import React, { useState, useEffect, useRef } from "react";
import { getFirestore } from "../firebase/firebase"
import firebase from "firebase";
import { Button } from "react-bootstrap";


export default function Inventario() {

    const [ordenId, setOrdenId] = useState("")

    const alcoholRef = useRef();
    const descripcionRef = useRef();
    const ibuRef = useRef();
    const imgRef = useRef();
    const marcaRef = useRef();
    const nombreRef = useRef();
    const precioRef = useRef();
    const stockRef = useRef();
    const paisRef = useRef();
    const estiloRef = useRef();


    function agregarInventario() {

        const db = getFirestore();
        const ordenesDeCompra = db.collection("productos")

        const nuevaOrdenDeCompra = {

            alcohol: parseInt(alcoholRef.current.value),
            descripcion: descripcionRef.current.value,
            ibu: parseInt(ibuRef.current.value),
            img: imgRef.current.value,
            marca: marcaRef.current.value,
            nombre: nombreRef.current.value,
            precio: parseInt(precioRef.current.value),
            stock: parseInt(stockRef.current.value),
            pais: paisRef.current.value,
            estilo: estiloRef.current.value
        }

        ordenesDeCompra.add(nuevaOrdenDeCompra)
            .then(({ id }) => {
                console.log("Orden generada: " + id)
                setOrdenId(id)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (

        <>

            <form action="">

                
                <input type="text" name="Marca" ref={marcaRef} placeholder="Marca" />
                <br /><br />
                <input type="text" name="Nombre" ref={nombreRef} placeholder="Nombre" />
                <br /><br />
                <input type="numbre" name="alcohol" ref={alcoholRef} placeholder="Alcohol" />
                <br /><br />
                <input type="text" name="descripcion" ref={descripcionRef} placeholder="Descripcion" />
                <br /><br />
                <input type="number" name="IBU" ref={ibuRef} placeholder="IBU" />
                <br /><br />
                <input type="text" name="Imagen" ref={imgRef} placeholder="Link de imagen" />
                <br /><br />
                <input type="number" name="Precio" ref={precioRef} placeholder="precio" />
                <br /><br />
                <input type="number" name="stock" ref={stockRef} placeholder="Stock" />
                <br /><br />
                <input type="text" name="pais" ref={paisRef} placeholder="Pais de origen" />
                <br /><br />
                <input type="text" name="estilo" ref={estiloRef} placeholder="Estilo" />
                <br /><br />

                <Button onClick={() => agregarInventario()}>Enviar</Button>
            </form>

        </>
    )
}