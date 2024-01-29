import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { UserNavigation } from "../../components";

import styles from "./Account.module.scss";

function Account() {
  return (
    <div className={styles.Account}>
      <div className={styles.divRow}>
        <UserNavigation />

        <div className={styles.divRight}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Account;
