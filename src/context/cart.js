import React, { useState, useEffect, useReducer } from "react";
import reducer from "./reducer";
import {
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  ADD_TO_CART,
  CLEAR_CART
} from "./actions";

function getCartFromLocalStorage() {
  return localStorage.getItem("bookstore_cart")
    ? JSON.parse(localStorage.getItem("bookstore_cart"))
    : [];
}

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, getCartFromLocalStorage());
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    localStorage.setItem("bookstore_cart", JSON.stringify(cart));
    let newCartItems = cart.reduce((acc, item) => {
      return (acc += item.amount);
    }, 0);
    setCartItems(newCartItems);
    let newTotal = cart.reduce((acc, item) => {
      return (acc += item.amount * item.price);
    }, 0);
    setTotal(newTotal);
  }, [cart]);

  const removeItem = id => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const increaseAmount = id => {
    dispatch({ type: INCREASE_AMOUNT, payload: id });
  };
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      dispatch({ type: REMOVE_ITEM, payload: id });
      return;
    } else {
      dispatch({ type: DECREASE_AMOUNT, payload: id });
    }
  };

  const addToCart = product => {
    const { id } = product;
    const item = [...cart].find(item => item.id === id);
    if (item) {
      dispatch({ type: INCREASE_AMOUNT, payload: id });
      return;
    } else {
      product.amount = 1;
      dispatch({ type: ADD_TO_CART, payload: product });
    }
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export { CartContext, CartProvider };
