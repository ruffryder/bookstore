import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductsProvider from "./context/products";
import { CartProvider } from "./context/cart";

ReactDOM.render(
  <CartProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </CartProvider>,
  document.getElementById("root")
);
