import React from "react";
import styles from "./AdminUnorderedList.module.scss";
import AdminLink from "./AdminLink/AdminLink";

function AdminUnorderedList({ header, arrayLinks }) {
  return (
    <ul className={styles.AdminUnorderedList}>
      <span className={styles.header}>{header}</span>
      {arrayLinks.map((el, index) => (
        <AdminLink obj={el} key={index} />
      ))}
    </ul>
  );
}

export default AdminUnorderedList;
