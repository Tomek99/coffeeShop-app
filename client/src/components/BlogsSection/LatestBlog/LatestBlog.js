import React from "react";
import styles from "./LatestBlog.module.scss";
import PropTypes from "prop-types";

function LatestBlog({ item, text }) {
  const { id, imageUrl, title, addedBy } = item;

  return (
    <div key={id} className={styles.singleBlog}>
      <div className={styles.zoomImage}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.textSection}>
        <h2>{title}</h2>
        <h4>{addedBy}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

LatestBlog.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  addedBy: PropTypes.string,
  text: PropTypes.string,
};
export default LatestBlog;
