import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, qty) => {
    let found = cartList.find((product) => product.idItem === item.id);
    if (found === undefined) {
      setCartList([
        ...cartList,
        {
          idItem: item.id,
          imgItem: item.img,
          nameItem: item.name,
          costItem: item.precio,
          qtyItem: qty,
        },
      ]);
    } else {
      found.qtyItem += qty;
      setCartList([...cartList]);
    }
  };

  const calcItemsQty = () => {
    let qtys = cartList.map((item) => item.qtyItem);
    return qtys.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  const calcTotalPerItem = (idItem) => {
    let index = cartList.map((item) => item.idItem).indexOf(idItem);
    return cartList[index].costItem * cartList[index].qtyItem;
  };

  const calcSubTotal = () => {
    let totalPerItem = cartList.map((item) => calcTotalPerItem(item.idItem));
    return totalPerItem.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  const calcTotal = () => {
    return calcSubTotal();
  };

  const removeList = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    let result = cartList.filter((item) => item.idItem !== id);
    setCartList(result);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeList,
        deleteItem,
        calcItemsQty,
        calcTotal,
        calcTotalPerItem,
        calcSubTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
