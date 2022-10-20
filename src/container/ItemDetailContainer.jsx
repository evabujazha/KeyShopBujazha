import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail";
import { firestoreFetchOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {
  const [data, setDato] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    firestoreFetchOne(idItem)
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
