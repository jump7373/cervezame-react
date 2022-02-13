import React, { useContext, useState, useEffect, useRef } from "react";
import { cartContext } from "../context/CartContext";
import { getFirestore } from "../firebase/firebase"
import firebase from "firebase";
import { Button } from "react-bootstrap";


export default function Form() {

    const { cart, calcularTotal, deleteCart } = useContext(cartContext)

    const [totalCompra, setTotalCompra] = useState(0)
    const [ordenId, setOrdenId] = useState("")
    const [compraTerminada, setCompraTerminada] = useState(true)

    const nombreRef = useRef();
    const direccionRef = useRef();
    const localidadRef = useRef();
    const emailRef = useRef();
    const telefonoRef = useRef();


    useEffect(() => {
        setTotalCompra(calcularTotal())
    }, [cart])

    function graciasPorSuCompra() {
        setCompraTerminada(false)
    }

    function finalizarCompra() {

        const db = getFirestore();
        const ordenesDeCompra = db.collection("ordenes")

        const nuevaOrdenDeCompra = {
            comprador: {
                nombre: nombreRef.current.value,
                dirección: direccionRef.current.value,
                localidad: localidadRef.current.value,
                email: emailRef.current.value,
                telefono: telefonoRef.current.value
            },
            items: cart,
            total: totalCompra,
            fecha: firebase.firestore.Timestamp.fromDate(new Date())
        }

        ordenesDeCompra.add(nuevaOrdenDeCompra)
            .then(({ id }) => {
                console.log("Orden generada: " + id)
                setOrdenId(id)
            })
            .catch((err) => {
                console.log(err)
            })
        deleteCart()
        graciasPorSuCompra()

    }

    return (

        <>
            {compraTerminada ?
                <form action="">
                    <h4>Ingrese sus datos</h4>

                    <input type="text" name="nombre" ref={nombreRef} placeholder="Ingrese su nombre y apellido" />
                    <br /><br />
                    <input type="text" name="direccion" ref={direccionRef} placeholder="Ingrese su domicilio" />
                    <br /><br />
                    <input type="text" name="localidad" ref={localidadRef} placeholder="Ingrese su localidad" />
                    <br /><br />
                    <input type="email" name="direccion de email" ref={emailRef} placeholder="Ingrese su email" />
                    <br /><br />
                    <input type="tel" name="número de teléfono" ref={telefonoRef} placeholder="Ingrese su número de teléfono" />
                    <br /><br />
                    <Button onClick={() => finalizarCompra()}>Enviar</Button>
                </form>
                :
                <div>
                    <h2>Gracias por su compra, su código de compra es: </h2>
                    <p style={{color: "red", fontSize: "35px"}}>{ordenId}</p>
                </div>
            }

        </>
    )
}