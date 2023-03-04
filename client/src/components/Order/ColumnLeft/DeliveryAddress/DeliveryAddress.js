import React from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./DeliveryAddress.module.scss";
import DeliveryForm from "./DeliveryForm/DeliveryForm";

function DeliveryAddress() {
  return (
    <div>
      <HeadingThree title="Delivery address" />
      <DeliveryForm />
    </div>
  );
}

export default DeliveryAddress;
