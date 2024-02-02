import React from "react";
import AdminCustomerMessageItem from "../AdminCustomerMessageItem/AdminCustomerMessageItem";

function AdminCustomerWaitingMessages({ data }) {
  return (
    <div>
      {data.map((item, i) => (
        <AdminCustomerMessageItem item={item} key={i} />
      ))}
    </div>
  );
}

export default AdminCustomerWaitingMessages;
