import React from "react";
import styles from "./Paragraph.module.scss";
import PropTypes from "prop-types";

function Paragraph({ title, text }) {
  return (
    <div className={styles.Paragraph}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

PropTypes.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
export default Paragraph;
