import React, { useContext } from "react";
import ProductList from "./ProductList";
import { ProductsContext } from "../../context/products";
import Loading from "../Loading";

export default function FeaturedProducts() {
  const { loading, featured } = useContext(ProductsContext);
  if (loading) {
    return <Loading />;
  }
  return <ProductList title="featured products" products={featured} />;
}
