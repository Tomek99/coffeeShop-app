import React, { useState } from "react";
import styles from "./AdminPage.module.scss";
import {
  AdminNavigationBar,
  AdminArticles,
  AdminOrders,
  AdminProducts,
  AdminUsers,
  AdminBar,
} from "../../components";

function AdmingPage() {
  const [openNav, setOpenNav] = useState(true);

  function handleNav() {
    setOpenNav(!openNav);
  }
  return (
    <div className={styles.AdminPage}>
      <AdminNavigationBar openNav={openNav} handleNav={handleNav} />
      <div className={styles.divRightSide}>
        <AdminBar handleNav={handleNav} />
      </div>
    </div>
  );
}

export default AdmingPage;
