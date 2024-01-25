import React from "react";
import styles from "./AdminCustomerItem.module.scss";
import { ImBin } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import AdminIconBtn from "../../AdminBtns/AdminIconBtn/AdminIconBtn";

function AdminCustomerItem({ item, index }) {
  const maskedHash = item.password.replace(/./g, "*").slice(0, 20);

  function handleBtn(action) {
    console.log(action);
  }
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
        <AdminIconBtn btnType="BsEye" handleBtn={handleBtn} action={"hi"} />
      </td>
      <td>
        <AdminIconBtn btnType="CiEdit" handleBtn={handleBtn} action={"hi"} />
      </td>
      <td>
        <AdminIconBtn btnType="ImBin" handleBtn={handleBtn} action={"hi"} />
      </td>
    </tr>
  );
}

export default AdminCustomerItem;
