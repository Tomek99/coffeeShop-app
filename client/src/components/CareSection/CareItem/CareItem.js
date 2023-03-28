import React from "react";
import PropTypes from "prop-types";
import styles from "./CareItem.module.scss";

function CareItem({ item }) {
  const { url, title, text } = item;
  return (
    <div className={styles.CareItem}>
      <img src={url} alt={title} />
      <div className={styles.wrapperText}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

CareItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default CareItem;
