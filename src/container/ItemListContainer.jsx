import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import CustomFetch from "../utils/CustomFetch";
import dataFromDB from "../utils/Products";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [data, setDatos] = useState([]);
  const { idCategory } = useParams();

  console.log(idCategory);

  useEffect(() => {
    CustomFetch(
      100,
      dataFromDB.filter((item) => {
        if (idCategory === undefined) return item;
        return item.idCategory === idCategory;
      })
    )
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);
  return (
    <>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
