import React, {useState, useEffect} from "react";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";
import {BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom"
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";
import Loader from "./Loader";

let itemList = [
    {id: "1001", marca: "Ortuzar", nombre: "CERVEZA POKER", stock: 6, precio: 280, alcohol: "5.8%", ibu:"51", descripcion:"Cerveza de color ámbar profundo acompañado por una espuma densa de gran retención. Cuerpo medio alto. Sabor a maltas caramelo y fuerte carácter a alcohol y amargor acompañados por un sutil ahumado. El agregado de bourbon Jack Daniels en madurado da notas a madera y vainilla hacia el final.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/poker-1.jpg"}, 
    {id: "1002", marca: "Ortuzar", nombre: "CERVEZA PORTER", stock: 3, precio: 290, alcohol:"5.7%", ibu:"26.6", descripcion:"Cerveza oscura profunda, con un rojo intenso a trasluz. Cerveza oscura profunda, con un rojo intenso a trasluz. Cerveza oscura profunda, con un rojo intenso a trasluz. Cuerpo medio alto, amargor medio con notas terrosas.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/porter-1.jpg"},
    {id: "1003", marca: "Ortuzar", nombre: "CERVEZA GERMAN PILS", stock: 13, precio: 280, alcohol:"5.2%", ibu:"22", descripcion:"Cerveza Alemana amarga de cuerpo ligero. Altamente atenuada de color dorado y fermentación baja que exhibe una excelente retención de espuma y un elegante aroma a lúpulo floral. Chispeante, limpia y refrescante, una Pilsner que exhibe la más fina calidad de malta y lúpulo alemán.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/germanpils.jpg"},
    {id: "1004", marca: "Ortuzar", nombre: "CERVEZA GOLDEN", stock: 10, precio: 280, alcohol:"4.86%", ibu:"14", descripcion:"Cerveza de alta tomabilidad con orientación hacia la malta. Balanceada y limpia. De color amarillo brillante con buena retención de espuma. Suave dulzor de malta y aromas a cereal. Presencia de lúpulo, aunque el amargar es bajo. El final es seco a ligeramente dulce-maltoso.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/golden-1.jpg"},
    {id: "1005", marca: "Ortuzar", nombre: "CERVEZA SESSION IPA", stock: 9, precio: 300, alcohol:"4.33%", ibu:"31", descripcion:"Cerveza clara de color amarillento. Cuerpo ligero, con sabores a malta y caramelo, aunque el predominante principal es el lúpulo. Amargor medio alto. Notas a resina, frutas tropicales y cítricas.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/sessionipa.jpg"},
    {id: "1006", marca: "Baba", nombre: "CERVEZA BLONDE ALE", stock: 9, precio: 320, alcohol:"5%", ibu:"18", descripcion:"Cerveza rubia, de color dorado intenso y espuma blanca. Aroma orientado hacia la malta, con notas frutadas provenientes de la fermentación y de los lúpulos utilizados. En boca presenta cuerpo moderado, con el amargor justo como para querer repetir el trago.", img:"https://babacerveza.com/wp-content/uploads/2021/07/Lata-Blonde.png"},
    {id: "1007", marca: "Baba", nombre: "AZAHAR HONEY", stock: 7, precio: 295, alcohol: "5.5%", ibu: "14", descripcion: "Cerveza color ámbar, elaborada con miel de naranjo. De aroma meloso, con toques cítricos y florales. En boca se muestra ligeramente dulce con un amargor suave y un cuerpo ligero.", img: "https://babacerveza.com/wp-content/uploads/2021/07/Lata-Honey.png"},
    {id: "1008", marca: "Baba", nombre: "JAMSY RED ALE", stock: 10, precio: 315, alcohol: "4.7%", ibu: "25", descripcion: "Brebaje de color cobrizo y espuma densa de tonos canela. Aroma y sabor a caramelo con notas a toffe. En boca comienza percibiéndose dulce y termina con un final seco y refrescante.", img: "https://babacerveza.com/wp-content/uploads/2021/07/Lata-Jamsy.png"}

];

export default function ItemDetailContainer (){

    const {itemId} = useParams();
    
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true)
      
    useEffect(() =>{

        const getItem = new Promise ((resolve, reject) => {

            setTimeout(() => {
                let Producto = itemList.find((item) => item.id === itemId);
                
                resolve (Producto)
            }, 10)
        });

        getItem.then((res) => {
            setProducts(res)
            setLoading(false)
        })

        getItem.catch((err) =>{
            setProducts(err)
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