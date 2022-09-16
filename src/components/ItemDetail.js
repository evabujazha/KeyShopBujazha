import React from "react";
import ItemCount from "./ItemCount.js";

const ItemDetail = ({ item }) => {
  return (
    <>
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">{item.name}</h4>
        </div>
        <div class="card-body">
          <img src={item.img} class="img-thumbnail" alt={item.name} />
          <ul class="list-unstyled mt-3 mb-4">
            <li>Tipo de licencia: {item.tipo}</li>
            <li>Duracion: {item.duracion}</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-outline-primary">
            ${item.precio}
          </button>
        </div>
      </div>
      <ItemCount stock={item.stock} />
    </>
  );
};

export default ItemDetail;
