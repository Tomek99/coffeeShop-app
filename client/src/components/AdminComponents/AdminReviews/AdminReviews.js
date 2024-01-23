import React, { useEffect, useState } from "react";
import axios from "axios";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import styles from "./AdminReviews.module.scss";
import AdminReviewItem from "./AdminReviewItem/AdminReviewItem";
import useFetchData from "../../../hooks/useFetchData";

function AdminReviews() {
  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/reviews`;
  const { isLoaded, data } = useFetchData(apiEndpoint);

  return isLoaded ? (
    <LoaderSpinner loading={isLoaded} />
  ) : (
    <div className={styles.AdminTransactions}>
      {data.map((item, index) => (
        <AdminReviewItem item={item} key={index} />
      ))}
    </div>
  );
}

export default AdminReviews;
