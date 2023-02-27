import React from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./Recipient.module.scss";

function Recipient() {
  return (
    <div className={styles.Recipient}>
      <HeadingThree title="Recipient details" />
    </div>
  );
}

export default Recipient;
