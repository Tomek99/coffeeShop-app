import React from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./DeliveryAddress.module.scss";
import address_date from "../../../../data/address_data.json";
import FieldComponent from "../../../FormikComponents/FieldComponent/FieldComponent";

function DeliveryAddress() {
  return (
    <div>
      <HeadingThree title="Delivery address" />
      <div className={styles.DeliveryForm}>
        {address_date.map((item, index) => (
          <FieldComponent item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default DeliveryAddress;
