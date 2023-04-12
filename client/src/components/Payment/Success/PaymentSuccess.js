import React, { useEffect } from "react";
import styles from "./PaymentSuccess.module.scss";
import PropTypes from "prop-types";

function PaymentSuccessful({ clearTheCart }) {
  useEffect(() => {
    clearTheCart();
  }, []);

  return <div className={styles.PaymentSuccessful}>Payment Successful!</div>;
}
PaymentSuccessful.propTypes = {
  clearTheCart: PropTypes.func,
};
export default PaymentSuccessful;
