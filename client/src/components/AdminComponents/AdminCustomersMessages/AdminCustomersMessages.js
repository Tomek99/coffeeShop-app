import React, { useState } from "react";
import styles from "./AdminCustomersMessages.module.scss";
import useFetchData from "../../../hooks/useFetchData";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import AdminCustomerWaitingMessages from "./AdminCustomerWaitingMessages/AdminCustomerWaitingMessages";
import AdminCustomerCompletedMessages from "./AdminCustomerCompletedMessages/AdminCustomerCompletedMessages";
import BtnChangePage from "../../Buttons/BtnChangePage/BtnChangePage";

function AdminCustomersMessages() {
  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/messages/get-messages`;
  const { isLoaded, data } = useFetchData(apiEndpoint);
  const [selectedPage, setSelectedPage] = useState("waiting");

  const waitingMessages = data.filter((item) =>
    item.isCompleted.includes("waiting")
  );
  const completedMessages = data.filter((item) =>
    item.isCompleted.includes("completed")
  );

  function handlePage(page) {
    setSelectedPage(page);
  }

  return (
    <section className={styles.AdminCustomersMessages}>
      <div className={styles.btnsDiv}>
        <BtnChangePage
          handlePage={handlePage}
          selectedpage={selectedPage}
          textBtn="Waiting messages"
          adjustedPage="waiting"
        />
        <BtnChangePage
          handlePage={handlePage}
          selectedpage={selectedPage}
          textBtn="Completed messages"
          adjustedPage="completed"
        />
      </div>
      {isLoaded ? (
        <LoaderSpinner loading={isLoaded} />
      ) : (
        (() => {
          switch (selectedPage) {
            case "waiting":
              return <AdminCustomerWaitingMessages data={waitingMessages} />;
            case "completed":
              return (
                <AdminCustomerCompletedMessages data={completedMessages} />
              );
            default:
              return null;
          }
        })()
      )}
      <div></div>
    </section>
  );
}

export default AdminCustomersMessages;
