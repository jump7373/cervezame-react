import React, {useState, useEffect} from "react";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";
import {BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom"
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";

let itemList = [
    {id: "1001", nombre: "CERVEZA POKER", stock: 6, precio: 280, alcohol: "5.8%", ibu:"51", descripcion:"Cerveza de color ámbar profundo acompañado por una espuma densa de gran retención. Cuerpo medio alto. Sabor a maltas caramelo y fuerte carácter a alcohol y amargor acompañados por un sutil ahumado. El agregado de bourbon Jack Daniels en madurado da notas a madera y vainilla hacia el final.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/poker-1.jpg"}, 
    {id: "1002", nombre: "CERVEZA PORTER", stock: 3, precio: 290, alcohol:"5.7%", ibu:"26.6", descripcion:"Cerveza oscura profunda, con un rojo intenso a trasluz. Cerveza oscura profunda, con un rojo intenso a trasluz. Cerveza oscura profunda, con un rojo intenso a trasluz. Cuerpo medio alto, amargor medio con notas terrosas.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/porter-1.jpg"},
    {id: "1003", nombre: "CERVEZA GERMAN PILS", stock: 13, precio: 280, alcohol:"5.2%", ibu:"22", descripcion:"Cerveza Alemana amarga de cuerpo ligero. Altamente atenuada de color dorado y fermentación baja que exhibe una excelente retención de espuma y un elegante aroma a lúpulo floral. Chispeante, limpia y refrescante, una Pilsner que exhibe la más fina calidad de malta y lúpulo alemán.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/germanpils.jpg"},
    {id: "1004", nombre: "CERVEZA GOLDEN", stock: 10, precio: 280, alcohol:"4.86%", ibu:"14", descripcion:"Cerveza de alta tomabilidad con orientación hacia la malta. Balanceada y limpia. De color amarillo brillante con buena retención de espuma. Suave dulzor de malta y aromas a cereal. Presencia de lúpulo, aunque el amargar es bajo. El final es seco a ligeramente dulce-maltoso.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/golden-1.jpg"},
    {id: "1005", nombre: "CERVEZA SESSION IPA", stock: 9, precio: 300, alcohol:"4.33%", ibu:"31", descripcion:"Cerveza clara de color amarillento. Cuerpo ligero, con sabores a malta y caramelo, aunque el predominante principal es el lúpulo. Amargor medio alto. Notas a resina, frutas tropicales y cítricas.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/sessionipa.jpg"},
];

export default function ItemDetailContainer (){

    const {itemId} = useParams();
    const [products, setProducts] = useState({});
      
    useEffect(() =>{

        const GetItem = new Promise ((resolve, reject) => {

            setTimeout(() => {
                const producto = itemList.find((item) => item.id === itemId);
                resolve (producto)
            }, 1000)
        });

        GetItem.then((res) => {
            setProducts(res)
        })

        GetItem.catch((err) =>{
            setProducts(err)
        })

        
    }, [itemId])


    return(
        <>
            <ItemDetail products={products}/>
           
        </>
    )
}