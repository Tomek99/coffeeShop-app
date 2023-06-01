import React from "react";
import { BsTruck } from "react-icons/bs";
import { TfiPackage } from "react-icons/tfi";
import styles from "./DeliverMethod.module.scss";
import PropTypes from "prop-types";

function DeliverMethod({ delivery }) {
  return (
    <div className={styles.DeliverMethod}>
      <div className={styles.divContent}>
        <div className={styles.divImg}>
          <BsTruck size={25} />
        </div>
        <div className={styles.divText}>
          <p className={styles.pOne}>Delivery method:</p>
          <p>{delivery}</p>
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

DeliverMethod.propTypes = {
  delivery: PropTypes.string,
};
export default DeliverMethod;
