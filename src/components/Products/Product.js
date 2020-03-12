import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CartContext } from "../../context/cart";
import img from "../../assets/noimage.gif";

export default function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <article className="product">
      <div className="img-container">
        <img src={product.image} alt={product.title} />
        <Link
          to={`products/${product.id}`}
          className="btn btn-primary details-link"
        >
          Details
        </Link>
        <button
          onClick={() => {
            addToCart(product);
          }}
          className="btn btn-primary add-to-cart-link"
        >
          Add to Cart
        </button>
      </div>
      <div className="product-footer">
        <p className="product-title">{product.title}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </article>
  );
}

Product.defaultProps = {
  product: {
    title: "No title",
    image: img,
    price: 0
  }
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
};
