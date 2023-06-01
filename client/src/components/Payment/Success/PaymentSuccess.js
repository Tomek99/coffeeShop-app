import React, { useEffect } from "react";
import styles from "./PaymentSuccess.module.scss";
import PropTypes from "prop-types";

function PaymentSuccessful({ clearTheCart }) {
  // clearTheCart();

  useEffect(() => {
    // This code will run once when the component mounts
    // console.log("useEffect called once");

    // Clean-up function (optional)
    return () => {
      // This code will run when the component unmounts
      clearTheCart();
    };
  }, []);
  return <div className={styles.PaymentSuccessful}>Payment Successful!</div>;
}
PaymentSuccessful.propTypes = {
  clearTheCart: PropTypes.func,
};
export default PaymentSuccessful;
