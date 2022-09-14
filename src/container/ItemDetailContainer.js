import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import CustomFetch from "../utils/CustomFetch";
import dataFromDB from "../utils/Products";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    CustomFetch(2000, dataFromDB)
      .then((datos) => setData(dataFromDB))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail data={data} />
    </>
  );
};

export default ItemDetailContainer;
