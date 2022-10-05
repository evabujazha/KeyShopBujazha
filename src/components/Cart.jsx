import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
  updateDoc,
  increment,
} from "firebase/firestore";
import db from "../utils/firebaseConfig";

const Cart = () => {
  const test = useContext(CartContext);

  const createOrder = () => {
    const itemsForDB = test.cartList.map((item) => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.costItem,
    }));

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, "items", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem),
      });
    });

    let order = {
      buyer: {
        name: "Valentin Torres Erwerle",
        email: "valencapo02@gmail.com",
        phone: "MB2020",
      },
      total: test.calcTotal(),
      items: itemsForDB,
      date: serverTimestamp(),
    };

    console.log(order);

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrderInFirestore()
      .then((result) =>
        alert(
          "Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: " +
            result.id +
            "\n\n"
        )
      )
      .catch((err) => console.log(err));

    test.removeList();
  };

  return (
    <div>
      <h1>YOUR CART</h1>
      <div>
        <Link to="/">
          <button>CONTINUE SHOPPING</button>
        </Link>
        {test.cartList.length > 0 ? (
          <button onClick={test.removeList}>DELETE ALL PRODUCTS</button>
        ) : (
          <span>Your cart is empty</span>
        )}
      </div>
      <div>
        {test.cartList.length > 0 ? (
          test.cartList.map((item) => (
            <div key={item.idItem}>
              <div>
                <img src={item.imgItem} />
                <div>
                  <span>
                    <b>Product:</b> {item.nameItem}
                  </span>
                  <button onClick={() => test.deleteItem(item.idItem)}>
                    DELETE
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <div>{item.qtyItem} item(s)</div>
                </div>
                <div>$ {item.costItem} each</div>
              </div>
              <div>$ {test.calcTotalPerItem(item.idItem)}</div>
            </div>
          ))
        ) : (
          <h1></h1>
        )}
      </div>
      <h3>Total: $ {test.calcSubTotal()} </h3>
      <button onClick={createOrder}>CHECKOUT NOW</button>
    </div>
  );
};

export default Cart;
