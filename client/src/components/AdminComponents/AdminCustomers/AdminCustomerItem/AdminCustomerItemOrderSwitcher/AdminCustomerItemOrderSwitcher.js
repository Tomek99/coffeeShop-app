import React from "react";
import AdminTextBtn from "../../../AdminBtns/AdminTextBtn/AdminTextBtn";
import axios from "axios";
import AdminCustomerItemOrders from "./AdminCustomerItemOrders/AdminCustomerItemOrders";

function AdminCustomerItemOrderSwitcher({ action, item, orders }) {
  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/users/delete-user`;
  console.log(orders);
  async function deleteUser() {
    await axios.delete(apiEndpoint, { data: item });
    window.location.reload();
  }
  return (() => {
    switch (action) {
      case "orders":
        return (
          <tr>
            <td colSpan={8}>
              {orders.map((item, i) => (
                <AdminCustomerItemOrders item={item} key={i} />
              ))}
            </td>
          </tr>
        );
      case "delete":
        return (
          <tr>
            <td colSpan={8}>
              <AdminTextBtn
                textBtn={"Yes, delete user"}
                handleBtn={deleteUser}
                action="delete"
              />{" "}
            </td>
          </tr>
        );

      default:
        return null;
    }
  })();
}

export default AdminCustomerItemOrderSwitcher;
