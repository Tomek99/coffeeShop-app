import React from "react";
import styles from "./BeansVideo.module.scss";

function BeansVideo() {
  return (
    <div className={styles.VideoDetails}>
      <video
        className={styles.test}
        controls
        loop
        autoPlay
        muted
        controlsList="nodownload"
      >
        <source src="./videos/beans.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default BeansVideo;
