import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import CustomFetch from "../utils/CustomFetch";
import dataFromDB from "../utils/Products";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    CustomFetch(2000, dataFromDB)
      .then((datos) => setData(dataFromDB))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
