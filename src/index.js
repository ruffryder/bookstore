import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductsProvider from "./context/products";

ReactDOM.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>,
  document.getElementById("root")
);
