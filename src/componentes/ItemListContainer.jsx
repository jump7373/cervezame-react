import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Item from './Item';
import ItemList from "./ItemList";
import "./ItemListContainer.css"


export default function ItemListContainer (items){

    const itemList = [
        {nombre: "POKER", stock: 6, precio: 280, alcohol: "5.8%", ibu:"51", descripcion:"Cerveza de color ámbar profundo acompañado por una espuma densa de gran retención. Cuerpo medio alto. Sabor a maltas caramelo y fuerte carácter a alcohol y amargor acompañados por un sutil ahumado. El agregado de bourbon Jack Daniels en madurado da notas a madera y vainilla hacia el final.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/poker-1.jpg"}, 
        {nombre: "PORTER", stock: 3, precio: 290, alcohol:"5.7%", ibu:"26.6", descripcion:"Cerveza oscura profunda, con un rojo intenso a trasluz. Cerveza oscura profunda, con un rojo intenso a trasluz. Cerveza oscura profunda, con un rojo intenso a trasluz. Cuerpo medio alto, amargor medio con notas terrosas.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/porter-1.jpg"},
        {nombre: "GERMAN PILS", stock: 13, precio: 280, alcohol:"5.2%", ibu:"22", descripcion:"Cerveza Alemana amarga de cuerpo ligero. Altamente atenuada de color dorado y fermentación baja que exhibe una excelente retención de espuma y un elegante aroma a lúpulo floral. Chispeante, limpia y refrescante, una Pilsner que exhibe la más fina calidad de malta y lúpulo alemán.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/germanpils.jpg"},
        {nombre: "GOLDEN", stock: 10, precio: 280, alcohol:"4.86%", ibu:"14", descripcion:"Cerveza de alta tomabilidad con orientación hacia la malta. Balanceada y limpia. De color amarillo brillante con buena retención de espuma. Suave dulzor de malta y aromas a cereal. Presencia de lúpulo, aunque el amargar es bajo. El final es seco a ligeramente dulce-maltoso.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/golden-1.jpg"},
        {nombre: "SESSION IPA", stock: 9, precio: 300, alcohol:"4.33%", ibu:"31", descripcion:"Cerveza clara de color amarillento. Cuerpo ligero, con sabores a malta y caramelo, aunque el predominante principal es el lúpulo. Amargor medio alto. Notas a resina, frutas tropicales y cítricas.", img:"https://cervezaortuzar.com.ar/wp-content/uploads/sessionipa.jpg"},
    ]

    const [products, setProducts] = useState([]);

    const cargarItemList = new Promise ((resolve, reject) =>{
        setTimeout (() => {

            resolve(itemList);
        }, 5000)
    })

    useEffect(() =>{
        cargarItemList.then((res) => {
            setProducts(res)
        })
    }, [])
    
    return(
        <div className="category">
            
            <ItemList items={products} />
        </div>
    )
}