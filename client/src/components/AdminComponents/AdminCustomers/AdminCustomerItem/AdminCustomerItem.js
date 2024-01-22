import React from "react";
import styles from "./AdminCustomerItem.module.scss";
import { ImBin } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { BsEye } from "react-icons/bs";

function AdminCustomerItem({ item, index }) {
  const maskedHash = item.password.replace(/./g, "*").slice(0, 20);
  return (
    <tr className={styles.AdminCustomerItem}>
      <td>{index}</td>
      <td>{item._id}</td>
      <td>
        {item.firstName}
        &nbsp;
        {item.lastName}
      </td>
      <td>{item.email}</td>
      <td>{item.number !== "" ? item.number : "111 512 333"}</td>
      <td>{maskedHash}</td>
      <td>
        {" "}
        <button className={styles.adminActionBtn}>
          <BsEye size={25} />
        </button>
      </td>
      <td>
        {" "}
        <button className={styles.adminActionBtn}>
          <CiEdit size={25} />
        </button>
      </td>
      <td>
        {" "}
        <button className={styles.adminActionBtn}>
          <ImBin size={25} />
        </button>
      </td>
    </tr>
  );
}

export default AdminCustomerItem;
