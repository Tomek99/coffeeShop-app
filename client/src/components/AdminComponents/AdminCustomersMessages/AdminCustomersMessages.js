import React from "react";
import styles from "./AdminCustomersMessages.module.scss";
import AdminCustomerMessageItem from "./AdminCustomerMessageItem/AdminCustomerMessageItem";

const testData = [
  {
    _id: "fwafwafwaf",
    fullName: "Gal anonim",
    number: "111-222-333",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at quam fringilla, varius tellus at, commodo nisl. Nunc eu lobortis nisl. Nunc consectetur nunc sit amet quam euismod tincidunt. Sed eu cursus nisl. Proin consequat elit non tortor interdum finibus. Nam in dui vel sem lacinia suscipit. Phasellus aliquet convallis nulla in maximus. Curabitur vel ante quis metus convallis ornare non vitae nibh. Vestibulum luctus quis ligula ut sagittis. Nunc ultricies vehicula faucibus. Duis ut placerat quam, id venenatis dui. Donec sit amet vulputate ante, sed venenatis lectus. Suspendisse sed lorem neque.",
  },
];

function AdminCustomersMessages() {
  return (
    <section className={styles.AdminCustomersMessages}>
      <div>
        {testData.map((item, i) => (
          <AdminCustomerMessageItem item={item} key={i} />
        ))}
      </div>
      <div></div>
    </section>
  );
}

export default AdminCustomersMessages;
