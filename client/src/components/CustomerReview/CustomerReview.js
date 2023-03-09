import React from "react";
import styles from "./CustomerReview.module.scss";
import PropTypes from "prop-types";
import RatingsStars from "../RatingStars/RatingStars";

function CustomerReview({ item, isTrue }) {
  const { id, imageUrl, text, avatarUrl, name, rate } = item;
  const style = { width: "290px" };

  return (
    <div key={id} className={styles.singleCustomer} style={isTrue && style}>
      <img src={imageUrl} alt="quote" />
      <p>{text}</p>
      <img src={avatarUrl} alt="" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <div>
        <RatingsStars rate={rate} size="medium" />
      </div>
    </div>
  );
}

CustomerReview.propTypes = {
  id: PropTypes.number,
  isTrue: PropTypes.bool,
  imageUrl: PropTypes.string,
  text: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  rate: PropTypes.number,
};
export default CustomerReview;
