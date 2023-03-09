import React from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./Payment.module.scss";
import input_payment_data from "../../../../data/input_payment_data.json";
import InputRadioShopper from "../InputRadio/InputRadio";
import { RiQuestionMark } from "react-icons/ri";

function Payment({ handlePayment, payment }) {
  const icons = [
    <RiQuestionMark size={25} />,
    <RiQuestionMark size={25} />,
    <RiQuestionMark size={25} />,
    <RiQuestionMark size={25} />,
    <RiQuestionMark size={25} />,
  ];

  return (
    <div className={styles.Payment}>
      <HeadingThree title="Payment" />
      <fieldset className={styles.fieldsetInputs}>
        {input_payment_data.map((item, index) => (
          <InputRadioShopper
            item={item}
            index={index}
            key={index}
            option={payment}
            handleInput={handlePayment}
            icon={icons[index]}
          />
        ))}
      </fieldset>
    </div>
  );
}

export default Payment;
