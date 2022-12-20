import React from "react";
import styles from "./CustomerReview.module.scss";

function CustomerReview(props) {
  const style = { width: "290px" };

  return (
    <div
      key={props.id}
      className={styles.singleCustomer}
      style={props.isTrue && style}
    >
      <img src={props.imageUrl} alt="quote" />
      <p>{props.text}</p>
      <img src={props.avatarUrl} alt="" className={styles.avatar} />
      <p className={styles.name}>{props.name}</p>
      <p>STAR COMPONENT SOON</p>
    </div>
  );
}

export default CustomerReview;
