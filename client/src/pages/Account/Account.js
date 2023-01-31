import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { UserNavigation } from "../../components";
import styles from "./Account.module.scss";

function Account() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className={styles.Account}>
      <div className={styles.divRow}>
        <UserNavigation />

        <div style={{ color: "#fff" }} className={styles.divRight}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Account;
