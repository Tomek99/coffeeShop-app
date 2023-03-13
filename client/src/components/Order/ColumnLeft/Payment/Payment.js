import React, { useState } from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./Payment.module.scss";
import input_payment_data from "../../../../data/input_payment_data.json";
import InputRadio from "../InputRadio/InputRadio";
import { RiQuestionMark } from "react-icons/ri";
import ErrMessage from "../../../ErrorMessage/ErrMessage";

function Payment() {
  const [activeIndex, setActiveIndex] = useState(() => {
    const storedValue = localStorage.getItem("paymentActiveIndex");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return 0;
  });
  function handleFieldValue(id, index) {
    localStorage.setItem("paymentActiveIndex", index);
    setActiveIndex(index);
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
            activeIndex={activeIndex}
            handleFieldValue={handleFieldValue}
            icon={<RiQuestionMark size={25} />}
          />
        ))}
      </fieldset>
      <ErrMessage name="payment" />
    </div>
  );
}

export default Payment;
