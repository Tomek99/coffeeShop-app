import React from "react";
import Button from "../Buttons/ButtonBlogs";
import styles from "./LatestBlog.module.scss";

function LatestBlog(props) {
  return (
    <div key={props.id} className={styles.singleBlog}>
      <div className={styles.zoomImage}>
        <img src={props.url} alt={props.title} />
      </div>
      <div className={styles.textSection}>
        <h2>{props.title}</h2>
        <h4>{props.addedBy}</h4>
        <p>{props.text}</p>
        <Button text="read more" />
      </div>
    </div>
  );
}

export default LatestBlog;
