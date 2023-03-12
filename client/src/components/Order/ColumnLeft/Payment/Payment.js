import React, { useState } from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./Payment.module.scss";
import input_payment_data from "../../../../data/input_payment_data.json";
import InputRadio from "../InputRadio/InputRadio";
import { RiQuestionMark } from "react-icons/ri";

function Payment({ setFieldValue }) {
  const [activeIndex, setActiveIndex] = useState("0");
  function handleFieldValue(id, index) {
    setActiveIndex(index);

    if (id !== "showroom") {
      setFieldValue("activeAddress", true);
    } else {
      setFieldValue("activeAddress", false);
    }
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
    </div>
  );
}

export default Payment;
