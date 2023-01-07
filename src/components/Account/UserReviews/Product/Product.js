import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";

function Product() {
  return (
    <div className={styles.Product}>
      <div className={styles.divRowFirst}>
        <div className={styles.divImg}>
          <img src="/images/product-1.png" alt="a" />
        </div>
        <div className={styles.generalInfo}>
          <Link className={styles.showMore} style={{ color: "#fff" }}>
            Fresh Cofee
          </Link>
          <Link className={styles.showMore} style={{ color: "#ccc" }}>
            4 month ago
          </Link>
        </div>
      </div>
      <div className={styles.divRowSecond}>
        <button className={styles.btnDots}>
          <BsThreeDotsVertical size={20} />
        </button>
        <div className={styles.rating}>
          <Rating
            name="no-value"
            value={null}
            size="large"
            sx={{
              ".css-1c99szj-MuiRating-icon": {
                color: "#ffb74d",
              },
            }}
          />
        </div>

        <button className={styles.btnFeedback}>Give feedback</button>
      </div>
    </div>
  );
}

export default Product;
