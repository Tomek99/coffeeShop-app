import React, { useState } from "react";
import styles from "./Delivery.module.scss";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import PropTypes from "prop-types";
import input_deliver_data from "../../../../data/input_deliver_data.json";
import InputRadio from "../InputRadio/InputRadio";
import { BsTruck, BsShop } from "react-icons/bs";
import { GiLockers } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";
import ErrMessage from "../../../ErrorMessage/ErrMessage";

function Delivery({ setFieldValue, activeDelivery, handleDelivery }) {
  const icons = [
    <BsTruck size={25} />,
    <BsShop size={25} />,
    <GiLockers size={25} />,
    <SlLocationPin size={25} />,
  ];

  function handleFieldValue(id, index, fee) {
    handleDelivery(index);
    if (id !== "showroom") {
      setFieldValue("activeAddress", true);
      setFieldValue("deliveryFee", fee);
    } else {
      setFieldValue("activeAddress", false);
      setFieldValue("deliveryFee", "0.00");
    }
  }

  return (
    <div className={styles.Deliver}>
      <HeadingThree title="Delivery" />

      <fieldset className={styles.fieldsetInputs}>
        {input_deliver_data.map((item, index) => (
          <InputRadio
            item={item}
            key={index}
            index={index}
            activeIndex={activeDelivery}
            icon={icons[index]}
            handleFieldValue={handleFieldValue}
          />
        ))}
      </fieldset>
      <ErrMessage name="delivery" />
    </div>
  );
}
Delivery.propTypes = {
  setFieldValue: PropTypes.func,
  handleDelivery: PropTypes.func,
  activeDelivery: PropTypes.number,
};
export default Delivery;
