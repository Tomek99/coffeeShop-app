import React from "react";
import styles from "./SocialMediaElement.module.scss";

function SocialMediaElement({ item }) {
  const { name, url } = item;

  return (
    <li className={styles.SocialMediaElement}>
      <a href={url}>{name}</a>
    </li>
  );
}

export default SocialMediaElement;
