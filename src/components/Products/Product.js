import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import img from "../../assets/main-bg.jpg";

export default function Product({ image, title, id, price }) {
  return (
    <article className="product">
      <div className="img-container">
        <img src={image} alt={title} />
        <Link to={`products/${id}`} className="btn btn-primary product-link">
          Details
        </Link>
      </div>
      <div className="product-footer">
        <p className="product-title">{title}</p>
        <p className="product-price">${price}</p>
      </div>
    </article>
  );
}

Product.defaultProps = {
  title: "No title",
  image: img,
  price: 0
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};
