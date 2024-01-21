import React, { useState } from "react";
import styles from "./AdminPage.module.scss";
import { Outlet } from "react-router-dom";
import { AdminNavigationBar, AdminSearch } from "../../components";
import { useWindowWidth } from "@react-hook/window-size";

function AdmingPage() {
  const [openNav, setOpenNav] = useState(false);
  const windowWidth = useWindowWidth();
  function handleNav() {
    setOpenNav(!openNav);
  }

  const setGridColumnTemplate = openNav
    ? "auto"
    : windowWidth <= 1000
    ? "auto"
    : "250px 1fr auto";

  return (
    <div
      className={styles.AdminPage}
      style={{ gridTemplateColumns: setGridColumnTemplate }}
    >
      <AdminNavigationBar openNav={openNav} handleNav={handleNav} />
      <div className={styles.divRightSide}>
        <AdminSearch handleNav={handleNav} />
        <Outlet />
      </div>
      {windowWidth <= 1400 ? null : (
        <div className={styles.additionContainer}></div>
      )}
    </div>
  );
}

export default AdmingPage;
