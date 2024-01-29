import { Rating } from "@mui/material";
import styles from "./RatingStars.module.scss";
import React from "react";
import PropTypes from "prop-types";

function RatingsStars({ rate, size, tab, setFieldValue, handleFeedbackBtn }) {
  return (
    <>
      {(() => {
        switch (tab) {
          case 1:
            return (
              <Rating
                name="rate"
                value={rate}
                size={size}
                className={styles.RatingsStars}
                onChange={(event, newValue) => {
                  if (newValue !== null) {
                    setFieldValue("rate", newValue);
                  } else {
                    setFieldValue("rate", 0);
                  }
                }}
              />
            );

          case 2:
            return (
              <Rating
                name="no-value"
                size={size}
                value={null}
                className={styles.RatingsStars}
                onChange={handleFeedbackBtn}
              />
            );
          default:
            return (
              <Rating
                name="read-only"
                value={rate}
                size={size}
                readOnly
                className={styles.RatingsStars}
              />
            );
        }
      })()}
    </>
  );
}
RatingsStars.propTypes = {
  rate: PropTypes.number,
  size: PropTypes.string,
  tab: PropTypes.number,
};
export default RatingsStars;
