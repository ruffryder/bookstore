import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductsProvider from "./context/products";
import { CartProvider } from "./context/cart";
import { UserProvider } from "./context/user";

ReactDOM.render(
  <UserProvider>
    <CartProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </CartProvider>
  </UserProvider>,
  document.getElementById("root")
);
