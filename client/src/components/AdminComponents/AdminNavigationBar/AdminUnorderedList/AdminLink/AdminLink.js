import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AdminLink.module.scss";

function AdminLinks({ obj }) {
  return (
    <li className={styles.adminLiElement}>
      <NavLink
        to={obj.path}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? `${styles.adminNavLink} ${styles.adminActiveNavLink}`
            : styles.adminNavLink
        }
      >
        {obj.icon}
        {obj.text}
      </NavLink>
    </li>
  );
}

export default AdminLinks;
