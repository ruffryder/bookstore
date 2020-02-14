// products context
import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../utils/URL";
import { featuredProducts, flattenProducts, paginate } from "../utils/helpers";

export const ProductsContext = React.createContext();

// Provider
export default function ProductsProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    shipping: false,
    price: "all"
  });
  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then(res => {
      const featured = featuredProducts(flattenProducts(res.data));
      const products = flattenProducts(res.data);
      setSorted(paginate(products));
      setProducts(products);
      setFeatured(featured);
      setLoading(false);
    });
    return () => {};
  }, []);

  const changePage = index => {
    setPage(index);
  };

  const updateFilters = e => {
    console.log(e);
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        featured,
        sorted,
        page,
        filters,
        changePage,
        updateFilters
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
