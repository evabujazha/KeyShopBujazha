import React from "react";
import NavBar from "./components/Navbar";
import ItemDetailContainer from "./container/ItemDetailContainer";
import ItemListContainer from "./container/ItemListContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
};

export default App;
