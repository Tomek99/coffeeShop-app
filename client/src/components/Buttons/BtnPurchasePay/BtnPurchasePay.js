import React from "react";
import PropTypes from "prop-types";
import styles from "./BtnPurchasePay.module.css";

function BtnPurchasePay({ handleCheckout }) {
  return (
    <button
      type="submit"
      onClick={handleCheckout}
      className={styles.BtnPurchasePay}
    >
      Purchase and pay
    </button>
  );
}
BtnPurchasePay.propTypes = {
  handleCheckout: PropTypes.func,
};
export default BtnPurchasePay;
