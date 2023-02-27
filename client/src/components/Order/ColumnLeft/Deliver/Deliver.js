import React, { useState } from "react";
import styles from "./Deliver.module.scss";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import InputRadio from "./InputRadio/InputRadio";
import PropTypes from "prop-types";

function Deliver({ handleOptionChange, selectedOption }) {
  const input_deliver_data = [
    {
      genericValue: "carrier",
      text: "Carrier – InPost, UPS, FedEx, DTS, PickPack",
    },
    { genericValue: "showroom", text: "Pickup at coffe-shop showroom" },
    { genericValue: "packageLocker", text: "Package locker" },
  ];
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
