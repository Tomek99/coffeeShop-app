import React from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import InputRadioShopper from "../InputRadio/InputRadio";
import styles from "./Shopper.module.scss";
import input_shopper_data from "../../../../data/input_shopper_data.json";
import PropTypes from "prop-types";

function Shopper({ handleShopper, shopper }) {
  return (
    <div className={styles.Shopper}>
      <HeadingThree title="You are purchasing as" />
      <fieldset className={styles.fieldsetInputs}>
        {input_shopper_data.map((item, index) => (
          <InputRadioShopper
            item={item}
            key={index}
            handleInput={handleShopper}
            option={shopper}
            index={index}
          />
        ))}
      </fieldset>
    </div>
  );
}
Shopper.propTypes = {
  handleShopper: PropTypes.func,
  shopper: PropTypes.string,
};
export default Shopper;
