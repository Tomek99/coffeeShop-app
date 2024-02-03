import React, { useState } from "react";
import styles from "./AdminCustomerItem.module.scss";
import { ImBin } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import AdminIconBtn from "../../AdminBtns/AdminIconBtn/AdminIconBtn";
import AdminTextBtn from "../../AdminBtns/AdminTextBtn/AdminTextBtn";

function AdminCustomerItem({ item, index, ordersData, isOrdersDataLoaded }) {
  const maskedHash = item.password.replace(/./g, "*").slice(0, 20);
  const orders = ordersData.filter((obj) => obj.userId === item._id);

  const [action, setAction] = useState("");
  function handleAction(a) {
    setAction(a !== action ? a : "");
  }
  return (
    <>
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
          <AdminIconBtn
            btnType="BsEye"
            handleBtn={() => handleAction("orders")}
            action={"orders"}
          />
        </td>

        <td>
          <AdminIconBtn
            btnType="ImBin"
            action={"delete"}
            handleBtn={() => handleAction("delete")}
          />
        </td>
      </tr>

      {(() => {
        switch (action) {
          case "orders":
            return (
              <tr>
                <td colSpan={8}>{orders.length} </td>
              </tr>
            );
          case "delete":
            return (
              <tr>
                <td colSpan={8}>{orders.length} </td>
              </tr>
            );

          default:
            return null;
        }
      })()}
    </>
  );
}

export default AdminCustomerItem;
