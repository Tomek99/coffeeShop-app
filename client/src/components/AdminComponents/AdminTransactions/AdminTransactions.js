import axios from "axios";
import React, { useEffect, useState } from "react";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import AdminTransactionItem from "./AdminTransactionItem/AdminTransactionItem";
import styles from "./AdminTransactions.module.scss";

function AdminTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/api/orders`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setTransactions(res.data);
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
    <div className={styles.AdminTransactions}>
      {transactions.map((item, index) => (
        <AdminTransactionItem item={item} index={index} key={index} />
      ))}
    </div>
  );
}

export default AdminTransactions;
