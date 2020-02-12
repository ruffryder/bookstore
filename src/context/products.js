// products context
import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../utils/URL";
import { featuredProducts } from "../utils/helpers";

export const ProductsContext = React.createContext();

// Provider
export default function ProductsProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then(res => {
      const featured = featuredProducts(res.data);
      setFeatured(featured);
      setProducts(res.data);
      setLoading(false);
    });
    return () => {};
  }, []);
  return (
    <ProductsContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductsContext.Provider>
  );
}
