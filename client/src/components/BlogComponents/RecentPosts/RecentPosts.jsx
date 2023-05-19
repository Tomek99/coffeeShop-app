import React from "react";
import styles from "./RecentPosts.module.scss";
import UserPost from "../../UserPost/UserPost";

function RecentPosts() {
  return (
    <div className={styles.RecentPosts}>
      <h1 className={styles.postsHeader}>Recent posts</h1>
      <div className={styles.divPosts}>
        <UserPost />
        <UserPost />
        <UserPost />
      </div>
    </div>
  );
}

export default RecentPosts;
