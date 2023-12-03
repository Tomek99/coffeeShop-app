import React from "react";
import DateDiff from "date-diff";
import styles from "./DataDiff.module.scss";

function DataDiff({ reviewDate }) {
  return (
    <span className={styles.DataDiff}>{convertDateFormat(reviewDate)}</span>
  );
}

function convertDateFormat(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-us", { month: "short" });
  const day = date.getDate();

  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}
export default DataDiff;
