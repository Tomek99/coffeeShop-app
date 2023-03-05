import React from "react";
import styles from "./Deliver.module.scss";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import PropTypes from "prop-types";
import input_deliver_data from "../../../../data/input_deliver_data.json";
import InputRadioShopper from "../InputRadio/InputRadio";
import { BsTruck, BsShop } from "react-icons/bs";
import { GiLockers } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";

function Deliver({ handleDeliver, deliver }) {
  const icons = [
    <BsTruck size={25} />,
    <BsShop size={25} />,
    <GiLockers size={25} />,
    <SlLocationPin size={25} />,
  ];
  return (
    <div className={styles.Deliver}>
      <HeadingThree title="Deliver" />

      <fieldset className={styles.fieldsetInputs}>
        {input_deliver_data.map((item, index) => (
          <InputRadioShopper
            item={item}
            key={index}
            handleInput={handleDeliver}
            option={deliver}
            index={index}
            icon={icons[index]}
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