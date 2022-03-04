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

    function finalizarCompra(event) {
        event.preventDefault()

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
                <div className="form">
                    <form action="" onSubmit={finalizarCompra}>
                    <h4>Ingrese sus datos</h4>

                    <input type="text" name="nombre" ref={nombreRef} placeholder="Ingrese su nombre y apellido" required autoFocus/>
                    <br /><br />
                    <input type="text" name="direccion" ref={direccionRef} placeholder="Ingrese su domicilio" required/>
                    <br /><br />
                    <input type="text" name="localidad" ref={localidadRef} placeholder="Ingrese su localidad" required/>
                    <br /><br />
                    <input type="email" name="direccion de email" ref={emailRef} placeholder="Ingrese su email" required/>
                    <br /><br />
                    <input type="number" name="número de teléfono" ref={telefonoRef} placeholder="Ingrese su número de teléfono" minLength="10" required/>
                    <br /><br />
                    <button className="button" type="submit" onClick={() => deleteCart()}>Enviar</button>
                    
                </form>
                </div>
                :
                <div className="form">
                    <div className="formFinal">
                    <h2 style={{color: "white", fontSize: "35px"}}>Gracias por su compra, su código de compra es: </h2>
                    <p style={{color: "white", fontSize: "35px"}}>{ordenId}</p>
                    </div>
                </div>
            }

        </>
    )
}
