import React, { useEffect, useState } from "react";
import styles from "./AdminCustomers.module.scss";
import axios from "axios";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import AdminCustomerItem from "./AdminCustomerItem/AdminCustomerItem";

function AdminCustomers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/api/users`)
      .then((res) => {
        if (res.status === 200) {
          setCustomers(res.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return loading ? (
    <LoaderSpinner loading={loading} />
  ) : (
    <div className={styles.AdminCustomers}>
      <table className={styles.tableContent}>
        <tbody>
          <tr className={styles.headers}>
            <td>Nr</td>
            <td>Id</td>
            <td>Customer name</td>
            <td>Email</td>
            <td>Phone number</td>
            <td>Password</td>
            <td>Orders</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          {customers.map((item, index) => (
            <AdminCustomerItem item={item} index={index + 1} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminCustomers;
