import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail";
import CustomFetch from "../utils/CustomFetch";
import dataFromDB from "../utils/Products";

const ItemDetailContainer = () => {
  const [data, setDato] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    CustomFetch(
      2000,
      dataFromDB.find((item) => item.id === parseInt(idItem))
    )
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail item={data} />
    </>
  );
};

export default ItemDetailContainer;
