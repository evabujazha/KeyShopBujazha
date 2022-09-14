import React from "react";
import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <>
      {data.length > 0 ? (
        data.map((product) => (
          <Item name={product.name} img={product.img} precio={product.precio} />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default ItemList;
