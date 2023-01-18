import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { UserNavigation } from "../../components";
import AccountContent from "../../components/Account/AccountContent/AccountContent";
import styles from "./Account.module.scss";

function Account() {
  const location = useLocation();

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
          {location.pathname.slice(1) === "account" ? (
            <AccountContent />
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
