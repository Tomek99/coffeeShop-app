import React from "react";
import Button from "../Buttons/Button";
import styles from "./LatestBlog.module.scss";
import PropTypes from "prop-types";

function LatestBlog(props) {
  const { id, url, title, addedBy, text } = props;

  return (
    <div key={id} className={styles.singleBlog}>
      <div className={styles.zoomImage}>
        <img src={url} alt={title} />
      </div>
      <div className={styles.textSection}>
        <h2>{title}</h2>
        <h4>{addedBy}</h4>
        <p>{text}</p>
        <Button text="read more" isTrue={false} />
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
