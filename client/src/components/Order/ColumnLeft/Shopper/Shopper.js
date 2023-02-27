import React from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import InputRadio from "../Deliver/InputRadio/InputRadio";
import styles from "./Shopper.module.scss";

function Shopper({ handleShopper, shopper }) {
  const input_shopper_data = [
    {
      genericValue: "privatePerson",
      text: "Private person",
    },
    {
      genericValue: "company",
      text: "Company",
    },
  ];
  return (
    <div>
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
