// products context
import React, { useState } from "react";

export const ProductsContext = React.createContext();

// Provider
export default function ProductsProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  return (
    <ProductsContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductsContext.Provider>
  );
}
