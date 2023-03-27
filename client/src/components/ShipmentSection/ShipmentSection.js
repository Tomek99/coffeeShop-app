import React from "react";
import BtnShipmentHome from "../Buttons/BtnShipmentHome/BtnShipmentHome";
import styles from "./ShipmentSection.module.scss";

function ShipmentSection() {
  const shipment_one =
    "https://res.cloudinary.com/dvoduabha/image/upload/v1679902226/shipment_2_knukof.webp";
  const shipment_two =
    "https://res.cloudinary.com/dvoduabha/image/upload/v1679902226/shipment_1_orfjpa.webp";

  return (
    <div className={styles.ShipmentSection}>
      <div className={styles.wrapper}>
        <div
          className={styles.container}
          style={{
            backgroundImage: `url(${shipment_one})`,
          }}
        >
          <div className={styles.content}>
            <h2>free shipping</h2>
            <div>
              <p>Orlen package, parcel locker and InPost carrier from $30</p>
            </div>
            <BtnShipmentHome text="Shipment methods" />
          </div>
        </div>
        <div
          className={styles.container}
          style={{
            backgroundImage: `url(${shipment_two})`,
          }}
        >
          <div className={styles.content}>
            <h2>free delivery</h2>
            <div>
              <p>
                On the whole Cracow area and neighbourhood, usually same day
                delivery!
              </p>
            </div>
            <BtnShipmentHome text="Delivery area" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShipmentSection;
