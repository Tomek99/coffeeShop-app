import React from "react";
import styles from "./Wish.module.scss";
import { WishList, UserNavigation } from "../../components";

function Wish() {
  return (
    <div className={styles.Wish}>
      <div className={styles.divRow}>
        {" "}
        <UserNavigation />
        <div className={styles.divRight}>
          <WishList />
        </div>
      </div>
    </div>
  );
}

export default Wish;
