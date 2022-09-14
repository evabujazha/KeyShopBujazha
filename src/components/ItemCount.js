import React, { useEffect, useState } from "react";

function ItemCount({ stock = 1, initial = 1 }) {
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
    if (count > initial) {
      setCounter((count) => count - 1);
    }
  };

  //eliminar
  const reset = () => {
    setCounter(initial);
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
        <button className="anadir" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
