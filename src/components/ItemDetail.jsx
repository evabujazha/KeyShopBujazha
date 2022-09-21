import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (qty) => {
    alert("Tenés " + qty + " " + item.name + " en el carrito");
    setItemCount(qty);
  };

  const onDelete = () => {
    alert("Eliminaste " + item.name + " del carrito");
    setItemCount(0);
  };

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
      {itemCount === 0 ? (
        <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
      ) : (
        <div>
          <ItemCount
            stock={item.stock}
            onAdd={onAdd}
            initial={itemCount}
            onDelete={onDelete}
          />
          <Link to="/cart">
            <button>CheckOut</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
