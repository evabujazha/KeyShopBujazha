import React from "react";
import ItemCount from "./ItemCount.js";

const Item = ({ data }) => {
  return (
    <>
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">{data.name}</h4>
        </div>
        <div class="card-body">
          <img src={data.img} class="img-thumbnail" alt={data.name} />
          <ul class="list-unstyled mt-3 mb-4">
            <li>Tipo de licencia: {data.tipo}</li>
            <li>Duracion: {data.duracion}</li>
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-outline-primary">
            ${data.precio}
          </button>
        </div>
      </div>
      <ItemCount stock={data.stock} />
    </>
  );
};

export default Item;
