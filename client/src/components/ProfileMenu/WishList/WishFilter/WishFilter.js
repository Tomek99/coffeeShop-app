import React from "react";
import styles from "./WishFilter.module.scss";
import { IoMdArrowDropdown } from "react-icons/io";

function WishFilter() {
  return (
    <div className={styles.WishFilter}>
      <h2>Sort:</h2>
      <div className={styles.sort}>
        <p>From newlest</p>
        <span>
          <IoMdArrowDropdown size={15} />
        </span>
      </div>
    </div>
  );
}

export default WishFilter;
