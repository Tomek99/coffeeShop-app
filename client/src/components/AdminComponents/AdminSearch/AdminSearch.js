import React, { useContext } from "react";
import styles from "./AdminSearch.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { AdminContext } from "../../../Contexts/AdminContext";
function AdminSearch() {
  const { handleNav, handleAdminMode } = useContext(AdminContext);
  return (
    <div className={styles.AdminBar}>
      <div className={styles.divSecondBar}>
        <button className={styles.btnNav} onClick={handleNav}>
          <AiOutlineMenu size={30} />
        </button>
        <div className={styles.divSearch}>
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Search..."
          />
          <BsSearch size={30} className={styles.iconSearch} />
        </div>
      </div>
      <button className={styles.btnLogout} onClick={handleAdminMode}>
        Log out
      </button>
    </div>
  );
}

export default AdminSearch;
