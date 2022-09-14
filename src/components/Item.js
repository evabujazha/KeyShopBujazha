import React from "react";

const Item = (props) => {
  return (
    <>
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">{props.name}</h4>
        </div>
        <div class="card-body">
          <img src={props.img} class="img-thumbnail" alt={props.name} />
          <button type="button" class="w-100 btn btn-lg btn-outline-primary">
            ${props.precio}
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
