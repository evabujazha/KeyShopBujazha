import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router";
import { firestoreFetch } from "../utils/firestoreFetch";

const ItemListContainer = () => {
  const [data, setDatos] = useState([]);
  const { idCategory } = useParams();

  console.log(idCategory);

  useEffect(() => {
    firestoreFetch(idCategory)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  useEffect(() => {
    return () => {
      setDatos([]);
    };
  }, []);

  return (
    <>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
