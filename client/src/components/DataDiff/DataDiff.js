import React from "react";
import DateDiff from "date-diff";
import styles from "./DataDiff.module.scss";

function DataDiff({ reviewDate }) {
  return <span className={styles.DataDiff}>{handleDiff(reviewDate)}</span>;
}

function handleDiff(reviewDate) {
  var date2 = new Date(2023, 6, 26, 12, 0, 15);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  const date1 = new Date(
    year,
    Number(month),
    Number(day),
    Number(hours),
    Number(minutes),
    Number(seconds)
  );
  const diff = new DateDiff(date1, date2);

  if (diff.seconds() < 60) return `${Math.round(diff.seconds())} seconds ago`;
  else if (diff.seconds() < 3600)
    return `${Math.round(diff.minutes())} minutes ago`;
  else if (diff.seconds() < 86400)
    return `${Math.round(diff.hours())} hours ago`;
  else if (diff.seconds() < 2629744)
    return `${Math.round(diff.days())} days ago`;
  else if (diff.seconds() < 31536000)
    return `${Math.round(diff.months())} months ago`;
  else return `${Math.round(diff.years())} years ago`;
}

export default DataDiff;
