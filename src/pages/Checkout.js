import React, { useContext, useState } from "react";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom";
import EmptyCart from "../components/Cart/EmptyCart";
import submitOrder from "../strapi/submitOrder";
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe
} from "react-stripe-elements";

function Checkout(props) {
  const { cart, total, clearCart } = useContext(CartContext);
  const { user, showAlert, alert, hideAlert } = useContext(UserContext);
  const history = useHistory();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const isEmpty = !name || alert.show;
  async function handleSubmit(e) {
    showAlert({ message: "processing order..." });
    e.preventDefault();
    const response = await props.stripe
      .createToken()
      .catch(error => console.log(error));
    const { token } = response;
    if (token) {
      setError("");
      const { id } = token;
      let order = await submitOrder({
        name,
        total,
        items: cart,
        stripeTokenId: id,
        userToken: user.token
      });
      if (order) {
        showAlert({ message: "Your order is complete" });
        clearCart();
        history.push("/");
        return;
      } else {
        showAlert({
          message: "There was an error with your order. Please try again",
          type: "danger"
        });
      }
    } else {
      hideAlert();
      setError(response.error.message);
    }
  }
  if (cart.length < 1) {
    return <EmptyCart />;
  }
  return (
    <section className="section form">
      <h2 className="section-title">Checkout</h2>
      <form className="checkout-form">
        <h3>
          Order total: <span>${Number(total).toFixed(2)}</span>
        </h3>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="stripe-input">
          <label htmlFor="card-element">Credit or Debit Card</label>
          <p className="stripe-info">
            {" "}
            Test using this card: <span>4242 4242 4242 4242</span>
            <br />
            Enter any 5 digits for the zip code <br />
            Enter any 3 digits for the CVC
          </p>
        </div>
        <CardElement className="card-element"></CardElement>
        {error && <p className="form-empty">{error}</p>}
        {isEmpty ? (
          <p className="form-empty">Please fill out name field</p>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
        )}
      </form>
    </section>
  );
}

const CardForm = injectStripe(Checkout);

const StripeWrapper = () => {
  return (
    <StripeProvider apiKey="pk_test_c4NlzsBKXZuoiXk5M3fVNDAX00lSUzTrLi">
      <Elements>
        <CardForm></CardForm>
      </Elements>
    </StripeProvider>
  );
};

export default StripeWrapper;
