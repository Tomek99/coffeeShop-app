import React from "react";
import DateDiff from "date-diff";
import styles from "./DataDiff.module.scss";

function DataDiff({ reviewDate }) {
  return <span className={styles.DataDiff}>{handleDiff(reviewDate)}</span>;
}

function handleDiff(reviewDate) {
  //-------Current data
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
  //-------Review added

  const yearTwo = Number(reviewDate.slice(0, 4));
  const monthTwo = Number(reviewDate.slice(5, 7));
  const dayTwo = Number(reviewDate.slice(8, 10));
  const hoursTwo = Number(reviewDate.slice(11, 13));
  const minutesTwo = Number(reviewDate.slice(14, 16));
  const secondsTwo = Number(reviewDate.slice(17, 19));

  const date2 = new Date(
    yearTwo,
    monthTwo,
    dayTwo,
    hoursTwo,
    minutesTwo,
    secondsTwo
  );
  //-------Date diff

  const diff = new DateDiff(date1, date2);

  if (diff.seconds() < 60);
  else if (diff.seconds() < 3600)
    return `${Math.round(diff.minutes())} minute(s) ago`;
  else if (diff.seconds() < 86400)
    return `${Math.round(diff.hours())} hour(s) ago`;
  else if (diff.seconds() < 2629744)
    return `${Math.round(diff.days())} day(s) ago`;
  else if (diff.seconds() < 31536000)
    return `${Math.round(diff.months())} month(s) ago`;
  else return `${Math.round(diff.years())} year(s) ago`;
}

export default DataDiff;
