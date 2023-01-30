import React from "react";
import styles from "./ViewCart.module.scss";
import { Link } from "react-router-dom";

function ViewCart() {
  return (
    <div>
      {15 !== 15 ? (
        <div>
          <header>Cart</header>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>
          <header>Your cart is empty</header>
          <Link to="/products">Return to products page</Link>
        </div>
      )}
    </div>
  );
}

export default ViewCart;
