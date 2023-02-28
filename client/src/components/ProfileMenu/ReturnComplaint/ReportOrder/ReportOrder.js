import React from "react";
import { Link } from "react-router-dom";
import styles from "./ReportOrder.module.scss";
import PropTypes from "prop-types";

function ReportOrder({ item }) {
  const { title, btnText, text } = item;
  return (
    <div className={styles.ReportOrder}>
      <div>
        <h4>{title}</h4>

        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <Link
        className={styles.btnComplaint}
        onClick={() => alert("component under construction")}
      >
        {btnText}
      </Link>
    </div>
  );
}

ReportOrder.propTypes = {
  title: PropTypes.string,
  btnText: PropTypes.string,
  text: PropTypes.array,
};
export default ReportOrder;
