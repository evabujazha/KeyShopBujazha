import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, precio }) => {
  return (
    <>
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">{name}</h4>
        </div>
        <div class="card-body">
          <img src={img} class="img-thumbnail" alt={name} />
          <button type="button" class="w-100 btn btn-lg btn-outline-primary">
            ${precio}
          </button>
          <button type="button" class="w-100 btn btn-lg btn-outline-primary">
            <Link to={`/item/${id}`}>Detalles</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
