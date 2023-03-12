import React from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import InputRadio from "../InputRadio/InputRadio";
import styles from "./Shopper.module.scss";
import input_shopper_data from "../../../../data/input_shopper_data.json";
import PropTypes from "prop-types";

function Shopper({ handleShopper, shopper, setFieldValue }) {
  function handleFieldValue(genricValue) {
    if (genricValue === "company") {
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
            handleInput={handleShopper}
            option={shopper}
            index={index}
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
