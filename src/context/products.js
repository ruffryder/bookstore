// products context
import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../utils/URL";

export const ProductsContext = React.createContext();

// Provider
export default function ProductsProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    axios.get(`${url}/products`).then(res => setProducts(res.data));
    return () => {};
  }, []);
  return (
    <ProductsContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductsContext.Provider>
  );
}
