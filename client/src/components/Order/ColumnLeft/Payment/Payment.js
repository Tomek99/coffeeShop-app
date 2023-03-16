import React, { useState } from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./Payment.module.scss";
import input_payment_data from "../../../../data/input_payment_data.json";
import InputRadio from "../InputRadio/InputRadio";
import PropTypes from "prop-types";
import ErrMessage from "../../../ErrorMessage/ErrMessage";

function Payment({ activePayment, handlePayment, setFieldValue }) {
  function handleFieldValue(id, index, fee) {
    handlePayment(index);

    setFieldValue("paymentFee", fee);
  }

  return (
    <div className={styles.Payment}>
      <HeadingThree title="Payment" />
      <fieldset className={styles.fieldsetInputs}>
        {input_payment_data.map((item, index) => (
          <InputRadio
            item={item}
            key={index}
            index={index}
            activeIndex={activePayment}
            handleFieldValue={handleFieldValue}
          />
        ))}
      </fieldset>
      <ErrMessage name="payment" />
    </div>
  );
}
Payment.propTypes = {
  activePayment: PropTypes.number,
  handlePayment: PropTypes.func,
  setFieldValue: PropTypes.func,
};
export default Payment;
