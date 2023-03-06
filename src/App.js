import React, { useState,Fragment} from "react";
import "./App.css";
import Header from "./Header/Header";
import Items from "./FoodItem/Items";
import Cart from "./Cart/Cart";
import CartProvider from "./Store/CartProvider";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const ShowCarthandler = () => {
    setCartIsShown(true)
  };
  const HideCartHandler = () => {
    setCartIsShown(false)
  };
  return (
   <CartProvider>
      {cartIsShown && <Cart onClose={HideCartHandler}/>}
      <Header onShowCart={ShowCarthandler}/>
      <main>
        <Items />
      </main>
      </CartProvider>
      
  );
}
export default App;
