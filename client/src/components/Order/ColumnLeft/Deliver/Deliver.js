import React, { useState } from "react";
import styles from "./Deliver.module.scss";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import PropTypes from "prop-types";
import input_deliver_data from "../../../../data/input_deliver_data.json";
import InputRadio from "../InputRadio/InputRadio";
import { BsTruck, BsShop } from "react-icons/bs";
import { GiLockers } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";

function Deliver({ setFieldValue, values }) {
  const [activeIndex, setActiveIndex] = useState("0");

  const icons = [
    <BsTruck size={25} />,
    <BsShop size={25} />,
    <GiLockers size={25} />,
    <SlLocationPin size={25} />,
  ];

  function handleFieldValue(id, index) {
    setActiveIndex(index);

    if (id !== "showroom") {
      setFieldValue("activeAddress", true);
    } else {
      setFieldValue("activeAddress", false);
    }
  }

  return (
    <div className={styles.Deliver}>
      <HeadingThree title="Deliver" />

      <fieldset className={styles.fieldsetInputs}>
        {input_deliver_data.map((item, index) => (
          <InputRadio
            item={item}
            key={index}
            index={index}
            activeIndex={activeIndex}
            icon={icons[index]}
            handleFieldValue={handleFieldValue}
          />
        ))}
      </fieldset>
    </div>
  );
}
Deliver.propTypes = {
  handleOptionChange: PropTypes.func,
  setFieldValue: PropTypes.func,
  deliver: PropTypes.string,
  values: PropTypes.object,
};
export default Deliver;
