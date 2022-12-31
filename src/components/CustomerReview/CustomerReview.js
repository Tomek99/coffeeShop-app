import React from "react";
import styles from "./CustomerReview.module.scss";
import Rating from "@mui/material/Rating";
import PropTypes from "prop-types";

function CustomerReview(props) {
  const { id, isTrue, imageUrl, text, avatarUrl, name, rate } = props;
  const style = { width: "290px" };

  return (
    <div key={id} className={styles.singleCustomer} style={isTrue && style}>
      <img src={imageUrl} alt="quote" />
      <p>{text}</p>
      <img src={avatarUrl} alt="" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <div>
        <Rating
          name="read-only"
          value={rate}
          readOnly
          sx={{
            ".css-1c99szj-MuiRating-icon": { color: "#ffb74d" },
          }}
        />
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
