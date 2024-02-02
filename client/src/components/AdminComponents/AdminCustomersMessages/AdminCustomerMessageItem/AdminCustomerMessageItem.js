import React from "react";
import styles from "./AdminCustomerMessageItem.module.scss";
import AdminTextBtn from "../../AdminBtns/AdminTextBtn/AdminTextBtn";
import deleteDataUtil from "../../../../utils/deleteDataUtil";
import putDataUtil from "../../../../utils/putDataUtil";
import formatPhoneNumberUtil from "../../../../utils/formatPhoneNumberUtil";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function AdminCustomerMessageItem({ item }) {
  const apiEndpointDeleteMessage = `${process.env.REACT_APP_API_URI}/api/messages/message/delete-message`;
  const apiEndpointPutMessage = `${process.env.REACT_APP_API_URI}/api/messages/message/put-message`;

  async function deleteMessage() {
    await deleteDataUtil(apiEndpointDeleteMessage, item._id);
    window.location.reload();
  }

  async function confirmMessage() {
    await putDataUtil(apiEndpointPutMessage, {
      id: item._id,
      isCompleted: "completed",
    });
  }

  const formatedNumber = formatPhoneNumberUtil(item.number);
  return (
    <div className={styles.AdminCustomerMessageItem}>
      <section className={styles.customerData}>
        <span>ID: {item._id}</span>
        <span>Full name: {item.fullName}</span>
        <span>Phone number: {formatedNumber}</span>
      </section>
      <div>
        <p>{item.message}</p>
      </div>

      {item.isCompleted.includes("completed") ? (
        <span className={styles.messageStatus}>
          Message status:{" "}
          <IoIosCheckmarkCircleOutline size={25} color="var(--green)" />
        </span>
      ) : (
        <div className={styles.btnsAction}>
          <AdminTextBtn
            handleBtn={confirmMessage}
            textBtn="Confirm"
            action="confirm"
          />
          <AdminTextBtn
            handleBtn={deleteMessage}
            textBtn="Ignore"
            action="ignore"
          />
        </div>
      )}
    </div>
  );
}

export default AdminCustomerMessageItem;
