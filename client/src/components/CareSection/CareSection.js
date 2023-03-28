import React from "react";
import styles from "./CareSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import care_data from "../../data/care_data.json";
import CareItem from "./CareItem/CareItem";

function CareSection() {
  return (
    <div className={styles.CareSection}>
      <HeaderSection firstWord="We" secondWord="care" />
      <div className={styles.careItemsWrapper}>
        {care_data.map((item, index) => (
          <CareItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CareSection;
