import React from "react";
import { Link } from "react-router-dom";
import styles from "./AdminLink.module.scss";

function AdminLinks({ obj }) {
  return (
    <li className={styles.adminLiElement}>
      <Link to={obj.path} className={styles.adminLink}>
        {obj.icon}
        {obj.text}
      </Link>
    </li>
  );
}

export default AdminLinks;
