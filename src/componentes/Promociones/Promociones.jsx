import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";
import "../Components.css"
import {Button} from "react-bootstrap";


export default function Promociones() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemPromotion = db
      .collection("productos")
      .where("promocion", "==", true);

    itemPromotion.get().then((querySnapShot) => {
      if (querySnapShot.size === 0) {
        console.log("No hay productos en el query");
        return;
      }

      setProducts(
        querySnapShot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
      setLoading(false);
    });
  }, []);
  return (
    <>
      <div className="categoryPromotion">
        {products.map((item) => (
          <div key={item.id} className="categoryPromotion__Item">
            <img src={item.img} />
            <h2>{item.nombre}</h2>
            <p>
              Alcohol: {item.alcohol} || IBU: {item.ibu}
            </p>
            <h3>${item.precio}</h3>

            <Link to={"/item/" + item.id}>
              <button className="button">Ver detalle</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
