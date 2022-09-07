import React from "react";
import ItemCount from "./ItemCount.js";

const Item = (props) => {
  return (
    <>
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">{props.producto}</h4>
        </div>
        <div class="card-body">
          <img src={props.img} class="img-thumbnail" alt={props.nombre} />
          <ul class="list-unstyled mt-3 mb-4">
            <li>Tipo de licencia: {props.tipo}</li>
            <li>Duracion: {props.duracion}</li>
          </ul>
          <button
            type="button"
            class="w-100 btn btn-lg btn-outline-primary"
            id={props.id}
          >
            ${props.precio}
          </button>
        </div>
      </div>
      <ItemCount />
    </>
  );
};

export default Item;
