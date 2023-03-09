import { Rating } from "@mui/material";
import styles from "./RatingStars.module.scss";
import React from "react";
import PropTypes from "prop-types";

function RatingsStars({ rate, size, tab }) {
  return (
    <>
      {(() => {
        switch (tab) {
          case 1:
            return (
              <Rating
                name="no-value"
                value={rate}
                size={size}
                className={styles.RatingsStars}
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
