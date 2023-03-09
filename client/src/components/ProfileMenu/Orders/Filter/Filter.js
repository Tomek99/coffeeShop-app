import React from "react";
import styles from "./Filter.module.scss";
import { IoMdArrowDropdown } from "react-icons/io";

function Filter() {
  return (
    <div className={styles.Filter}>
      <div className={styles.divLeft}>
        <div className={styles.divRow}>
          <h3>Filter:</h3>
          <div className={styles.divGapShowAll}>
            <p>Show all</p>
            <span>
              <IoMdArrowDropdown size={15} />
            </span>
          </div>
        </div>
        <div className={styles.divRow}>
          {" "}
          <div className={styles.divGapTeaCoffee}>
            <p>Tea & Coffee</p>
            <span>
              <IoMdArrowDropdown size={15} />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.divRight}>
        <h3>Sort:</h3>
        <div className={styles.divRow}>
          <p>From newest</p>
          <span>
            <IoMdArrowDropdown size={15} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Filter;
