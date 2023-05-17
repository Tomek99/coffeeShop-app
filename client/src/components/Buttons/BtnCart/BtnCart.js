import React from "react";
import styles from "./BtnCart.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function BtnCart({ handleCart }) {
  return (
    <Link
      className={styles.btnCheckoutNow}
      id="ViewCart"
      to="/cart"
      onClick={handleCart}
    >
      View my cart
    </Link>
  );
}
BtnCart.propTypes = {
  handleCart: PropTypes.func,
};
export default BtnCart;
