import React from "react";
import styles from "./UserPost.module.scss";

function UserPost() {
  return (
    <div className={styles.UserPost}>
      <img
        className={styles.userImage}
        src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
        alt="userImage"
      />
      <div className={styles.userContent}>
        <p className={styles.postData}>06.03.2023</p>
        <p className={styles.userText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}

export default UserPost;
