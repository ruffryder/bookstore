import React, { useContext } from "react";
import { ProductsContext } from "../context/products";

export default function Products() {
  const { loading, products } = useContext(ProductsContext);
  console.log(products);
  return <h1>hello from products page</h1>;
}
