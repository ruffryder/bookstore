import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Alert from "./components/Alert";
import PrivateRoute from "./components/PrivateRoute";
import ScrollButton from "./components/ScrollButton";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Alert />
      <ScrollButton />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <PrivateRoute path="/checkout">
          <Checkout />
        </PrivateRoute>
        <Route path="/login" component={Login} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
