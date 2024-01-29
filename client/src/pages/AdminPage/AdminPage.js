import React, { useState } from "react";
import styles from "./AdminPage.module.scss";
import { AdminContext } from "../../Contexts/AdminContext";
import { Outlet } from "react-router-dom";
import {
  AdminLoginPage,
  AdminNavigationBar,
  AdminSearch,
} from "../../components";
import { useWindowWidth } from "@react-hook/window-size";

function AdmingPage() {
  const [openNav, setOpenNav] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(() => {
    const storedValue = localStorage.getItem("isAdminMode");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return false;
  });

  const [adminData, setAdminData] = useState(() => {
    const storedValue = localStorage.getItem("adminData");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return false;
  });

  const windowWidth = useWindowWidth();
  function handleNav() {
    setOpenNav(!openNav);
  }

  function handleAdminMode() {
    setIsAdminMode(!isAdminMode);
    localStorage.setItem("isAdminMode", JSON.stringify(!isAdminMode));

    if (!isAdminMode === false) {
      localStorage.removeItem("adminData");
      localStorage.removeItem("isAdminMode");
    }
  }

  function handleAdminData(data) {
    setAdminData(data);
    localStorage.setItem("adminData", JSON.stringify(data));
  }

  const setGridColumnTemplate = openNav
    ? "auto"
    : windowWidth <= 1000
    ? "auto"
    : "250px 1fr auto";

  return (
    <AdminContext.Provider
      value={{
        openNav,
        adminData,
        handleNav,
        handleAdminMode,
        handleAdminData,
      }}
    >
      {isAdminMode ? (
        <div
          className={styles.AdminPage}
          style={{ gridTemplateColumns: setGridColumnTemplate }}
        >
          <AdminNavigationBar />
          <div className={styles.divRightSide}>
            <AdminSearch />
            <Outlet />
          </div>
          {windowWidth <= 1400 || openNav ? null : (
            <div className={styles.additionContainer}></div>
          )}
        </div>
      ) : (
        <AdminLoginPage />
      )}
    </AdminContext.Provider>
  );
}

export default AdmingPage;
