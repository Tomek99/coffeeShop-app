import React from "react";
import styles from "./BtnAddCart.module.css";
import PropTypes from "prop-types";

function BtnAddCart({ onClickAddToCart }) {
  return (
    <button className={styles.btnAddCart} onClick={onClickAddToCart}>
      Add to basket
    </button>
  );
}
BtnAddCart.propTypes = {
  onClickAddToCart: PropTypes.func,
};
export default BtnAddCart;
