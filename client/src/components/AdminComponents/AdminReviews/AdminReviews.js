import React, { useEffect, useState } from "react";
import axios from "axios";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import styles from "./AdminReviews.module.scss";
import AdminReviewItem from "./AdminReviewItem/AdminReviewItem";

function AdminReviews() {
  const [userReviews, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/api/reviews`)
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
    <div className={styles.AdminTransactions}>
      {userReviews.map((item, index) => (
        <AdminReviewItem item={item} key={index} />
      ))}
    </div>
  );
}

export default AdminReviews;
