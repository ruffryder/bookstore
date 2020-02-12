import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <section className="empty-cart section">
      <h2>Your cart is empty</h2>
      <Link to="/products" className="btn btn-primary">
        Go to products
      </Link>
    </section>
  );
}
