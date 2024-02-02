import React, { useState } from "react";
import styles from "./AdminCustomerItem.module.scss";
import { ImBin } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import AdminIconBtn from "../../AdminBtns/AdminIconBtn/AdminIconBtn";
import AdminTextBtn from "../../AdminBtns/AdminTextBtn/AdminTextBtn";

function AdminCustomerItem({ item, index }) {
  const maskedHash = item.password.replace(/./g, "*").slice(0, 20);

  function handleBtn(action) {}
  return (
    <tr className={styles.AdminCustomerItem}>
      <td>{index}.</td>
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
        <AdminIconBtn btnType="BsEye" handleBtn={handleBtn} action={"orders"} />
      </td>

      <td>
        <AdminIconBtn btnType="ImBin" handleBtn={handleBtn} action={"delete"} />
      </td>
    </tr>
  );
}

export default AdminCustomerItem;
