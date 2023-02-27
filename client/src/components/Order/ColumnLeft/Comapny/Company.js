import React from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./Company.module.scss";

function Company() {
  return (
    <div className={styles.Company}>
      <HeadingThree title="Company details invoice" />
    </div>
  );
}

export default Company;
