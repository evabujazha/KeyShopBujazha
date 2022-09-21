import React, { useEffect, useState } from "react";

function ItemCount({ stock = 1, initial = 0, onAdd, onDelete }) {
  const [count, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial);
  }, []);
  //incrementar
  const increase = () => {
    if (stock > count) {
      setCounter((count) => count + 1);
    }
  };

  //disminuir
  const decrease = () => {
    if (count > 0) {
      setCounter((count) => count - 1);
    }
  };

  return (
    <div className="count">
      <div className="btn__container">
        <button className="control__btn" onClick={decrease}>
          -
        </button>
        <span className="counter__output">{count}</span>
        <button className="control__btn" onClick={increase}>
          +
        </button>
        <br />
        <br />
        <button className="control__btn" onClick={() => onDelete()}>
          Eliminar
        </button>
        <br />
        <br />
        <button className="anadir" onClick={() => onAdd(count)}>
          Añadir al carrito
        </button>
        <br />
        <br />
      </div>
    </div>
  );
}

export default ItemCount;
