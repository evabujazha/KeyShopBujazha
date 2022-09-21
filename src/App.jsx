import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/Navbar";
import ItemDetailContainer from "./container/ItemDetailContainer";
import ItemListContainer from "./container/ItemListContainer";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
