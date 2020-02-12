import React, { useState, useEffect } from "react";

function getCartFromLocalStorage() {
  return localStorage.getItem("bookstore_cart")
    ? JSON.parse(localStorage.getItem("bookstore_cart"))
    : [];
}

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(getCartFromLocalStorage());
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
    setCart([...cart].filter(item => item.id !== id));
  };

  const increaseAmount = id => {
    setCart(
      [...cart].map(item =>
        item.id === id ? { ...item, amount: item.amount + 1 } : { ...item }
      )
    );
  };
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
      return;
    } else {
      setCart(
        [...cart].map(item =>
          item.id === id ? { ...item, amount: item.amount - 1 } : { ...item }
        )
      );
    }
  };

  const addToCart = product => {
    const { id, image, title, price } = product;
    const item = [...cart].find(item => item.id === id);
    if (item) {
      increaseAmount(id);
      return;
    } else {
      const newItem = { id, image, title, price, amount: 1 };
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
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
