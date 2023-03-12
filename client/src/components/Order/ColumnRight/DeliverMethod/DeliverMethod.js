import React from "react";
import { BsTruck } from "react-icons/bs";
import { TfiPackage } from "react-icons/tfi";
import styles from "./DeliverMethod.module.scss";

function DeliverMethod({ delivery }) {
  let value = delivery.substr(0, 7).toLowerCase();

  return (
    <div className={styles.DeliverMethod}>
      <div className={styles.divContent}>
        <div className={styles.divImg}>
          <BsTruck size={25} />
        </div>
        <div className={styles.divText}>
          <p className={styles.pOne}>Delivery method:</p>
          <p>
            {" "}
            {(() => {
              switch (value) {
                case "carrier":
                  return "Carrier – InPost, UPS, FedEx, DTS, PickPack";
                case "pickup ":
                  return "Pickup at coffe-shop showroom";
                case "package":
                  return "Package locker";
                case "collect":
                  return "Collection at point - Żabka, Poczta Polska and others";
                default:
                  return null;
              }
            })()}
          </p>
        </div>
      </div>
      <div className={styles.divContent}>
        <div>
          <TfiPackage size={25} />
        </div>
        <div className={styles.divText}>
          <p className={styles.pOne}>You will get the order:</p>
          <p>??????????</p>
        </div>
      </div>
    </div>
  );
}

export default DeliverMethod;
