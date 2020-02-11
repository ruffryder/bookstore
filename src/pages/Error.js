import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Ooops. The page was not found</h1>
        <Link to="/" className="btn btn-primary">
          Back to home page
        </Link>
      </div>
    </section>
  );
}
