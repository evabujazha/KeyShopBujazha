import React from "react";
import Item from "../components/Item";

const ItemListContainer = () => {
  return (
    <Item
      producto="Windows 10 Pro"
      tipo="Retail"
      duracion="De por vida"
      precio="5"
      stock={10}
      initial={1}
    />
  );
};

export default ItemListContainer;