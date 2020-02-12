import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/products";
// import {CartContext} from '../context/cart';
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductsContext);
  const product = products.find(item => item.id === +id);
  if (products.length === 0) {
    return <Loading />;
  } else {
    const {
      image: { url },
      title,
      price,
      description
    } = product;
    return (
      <section className="single-product">
        <img src={url} alt={title} className="single-product-image" />
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
          <button
            onClick={() => {
              //add item to cart
              history.push("/cart");
            }}
            className="btn btn-primary btn-block"
          >
            Add to cart
          </button>
        </article>
      </section>
    );
  }
}
