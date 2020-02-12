import React, { useState } from "react";
import localCart from "../utils/localCart";

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(localCart);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  const removeItem = id => {};

  const increaseAmount = id => {};
  const decreaseAmount = id => {};

  const addToCart = product => {};

  const clearCart = () => {};

  return (
    <CartContext.Provider value={{ cart, total, cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
export { CartContext, CartProvider };
