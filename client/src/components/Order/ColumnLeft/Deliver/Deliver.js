import React from "react";
import styles from "./Deliver.module.scss";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import InputRadio from "./InputRadio/InputRadio";
import PropTypes from "prop-types";
import input_deliver_data from "../../../../data/input_deliver_data.json";

function Deliver({ handleOptionChange, selectedOption }) {
  return (
    <div className={styles.Deliver}>
      <HeadingThree title="Deliver" />

      <fieldset>
        {input_deliver_data.map((item, index) => (
          <InputRadio
            item={item}
            key={index}
            selectedOption={selectedOption}
            handleInput={handleOptionChange}
          />
        ))}
      </fieldset>
    </div>
  );
}
Deliver.propTypes = {
  handleOptionChange: PropTypes.func,
  selectedOption: PropTypes.string,
};
export default Deliver;
