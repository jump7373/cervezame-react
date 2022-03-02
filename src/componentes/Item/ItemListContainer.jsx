import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "../Components.css";
import { getFirestore } from "../../firebase/firebase";
import Loader from "../Loader/Loader";

export default function ItemListContainer() {
  const { itemMarca } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = itemMarca
      ? db.collection("productos").where("marca", "==", itemMarca)
      : db.collection("productos");

    itemCollection.get().then((querySnapShot) => {
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
  }, [itemMarca]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = itemMarca
      ? db.collection("productos").where("pais", "==", itemMarca)
      : db.collection("productos");

    itemCollection.get().then((querySnapShot) => {
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
  }, [itemMarca]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = itemMarca
      ? db.collection("productos").where("envase", "==", itemMarca)
      : db.collection("productos");

    itemCollection.get().then((querySnapShot) => {
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
  }, [itemMarca]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = itemMarca
      ? db.collection("productos").where("origen", "==", itemMarca)
      : db.collection("productos");

    itemCollection.get().then((querySnapShot) => {
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
  }, [itemMarca]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <p className="title">Cervezas {itemMarca}</p>
        
          <div className="category">
            <ItemList products={products} />
          </div>
        </div>
      )}
    </>
  );
}
