import React, { useEffect, useState } from "react";
import Item from "../components/Item";
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
      {data.map((product) => (
        <Item
          name={product.name}
          img={product.img}
          tipo={product.tipo}
          duracion={product.duracion}
          precio={product.precio}
        />
      ))}
    </>
  );
};

export default ItemListContainer;
