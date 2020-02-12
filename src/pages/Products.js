import React, { useContext } from "react";
import { ProductsContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";

export default function Products() {
  const { loading, products } = useContext(ProductsContext);
  if (loading) {
    return <Loading />;
  }
  return <ProductList products={products} />;
}
