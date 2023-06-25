import React from "react";
import styles from "./CustomerReview.module.scss";
import PropTypes from "prop-types";
import RatingsStars from "../../RatingStars/RatingStars";

function CustomerReview({ item }) {
  const { id, imageUrl, text, avatarUrl, name, rate } = item;

  return (
    <div key={id} className={styles.singleCustomer}>
      <div className={styles.singleCustomerLeftDiv}>
        <img src={avatarUrl} alt="" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <div>
          <RatingsStars rate={rate} size="medium" />
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
}

CustomerReview.propTypes = {
  id: PropTypes.number,

  imageUrl: PropTypes.string,
  text: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  rate: PropTypes.number,
};
export default CustomerReview;
