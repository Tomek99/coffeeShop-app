import React, { useState } from "react";
import styles from "./AdminPage.module.scss";
import { Outlet } from "react-router-dom";
import { AdminNavigationBar, AdminSearch } from "../../components";

function AdmingPage() {
  const [openNav, setOpenNav] = useState(false);

  function handleNav() {
    setOpenNav(!openNav);
  }

  const setGridColumnTemplate = openNav ? "auto" : "250px 1fr";
  // style={{ gridTemplateColumns: setGridColumnTemplate }}
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
    </div>
  );
}

export default AdmingPage;
