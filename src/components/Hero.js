import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Biggest collection of books under one roof</h1>
        <p>find what interests you</p>
        {children}
      </div>
    </div>
  );
}
