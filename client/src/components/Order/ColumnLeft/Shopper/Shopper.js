import React from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import InputRadio from "../Deliver/InputRadio/InputRadio";
import styles from "./Shopper.module.scss";
import input_shopper_data from "../../../../data/input_shopper_data.json";

function Shopper({ handleShopper, shopper }) {
  return (
    <div className={styles.Shopper}>
      <HeadingThree title="You are purchasing as" />
      <fieldset>
        {input_shopper_data.map((item, index) => (
          <InputRadio
            item={item}
            key={index}
            handleInput={handleShopper}
            selectedOption={shopper}
          />
        ))}
      </fieldset>
    </div>
  );
}

export default Shopper;
