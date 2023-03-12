import React, { useState } from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import InputRadio from "../InputRadio/InputRadio";
import styles from "./Shopper.module.scss";
import input_shopper_data from "../../../../data/input_shopper_data.json";
import PropTypes from "prop-types";

function Shopper({ setFieldValue }) {
  const [activeIndex, setActiveIndex] = useState("0");

  function handleFieldValue(id, index) {
    setActiveIndex(index);

    if (id === "company") {
      setFieldValue("activeCompany", true);
      setFieldValue("activeInvoice", false);
    } else {
      setFieldValue("activeCompany", false);
    }
  }

  return (
    <div className={styles.Shopper}>
      <HeadingThree title="You are purchasing as" />
      <fieldset className={styles.fieldsetInputs}>
        {input_shopper_data.map((item, index) => (
          <InputRadio
            item={item}
            key={index}
            index={index}
            activeIndex={activeIndex}
            handleFieldValue={handleFieldValue}
          />
        ))}
      </fieldset>
    </div>
  );
}
Shopper.propTypes = {
  handleShopper: PropTypes.func,
  shopper: PropTypes.string,
  setFieldValue: PropTypes.func,
};
export default Shopper;
