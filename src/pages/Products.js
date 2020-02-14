import React, { useContext } from "react";
import { ProductsContext } from "../context/products";
import Loading from "../components/Loading";
import Filters from "../components/Products/Filters";
import PaginatedProducts from "../components/Products/PaginatedProducts";

export default function Products() {
  const { loading, sorted } = useContext(ProductsContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Filters />
      <PaginatedProducts />
    </>
  );
}
