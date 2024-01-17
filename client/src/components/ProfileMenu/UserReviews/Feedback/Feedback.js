import React, { useState } from "react";
import styles from "./Feedback.module.scss";
import RatingsStars from "../../../RatingStars/RatingStars";
import BtnDots from "../../../Buttons/BtnDots/BtnDots";
import BtnFeedback from "../../../Buttons/BtnFeedback/BtnFeedback";
import AddFeedback from "./AddFeedback/AddFeedback";
import BlurScreen from "../../BlurScreen/BlurScreen";

function Feedback({ item }) {
  const [show, setShow] = useState(false);

  function handleFeedbackBtn() {
    setShow(!show);
  }

  return (
    <div className={styles.Product}>
      <div className={styles.divRowFirst}>
        <div className={styles.divImg}>
          <img src={item.productImage} alt="a" />
        </div>
        <div className={styles.generalInfo}>
          <button
            className={styles.showMore}
            style={{ color: "var(--text-color)", fontWeight: "400" }}
          >
            {item.productName}
          </button>
          <button
            className={styles.showMore}
            style={{ color: "var(--text-color)" }}
          >
            Purchased: {item.createdAt.slice(0, 10)}
          </button>
        </div>
      </div>
      <div className={styles.divRowSecond}>
        <BtnDots />
        <div className={styles.rating}>
          <RatingsStars
            size="large"
            rate={null}
            name="no-value"
            tab={2}
            handleFeedbackBtn={handleFeedbackBtn}
          />
        </div>
        <BtnFeedback handleBtn={handleFeedbackBtn} />
        {show ? (
          <AddFeedback handleBtn={handleFeedbackBtn} item={item} />
        ) : null}
      </div>
      {show ? <BlurScreen handleBlurScreen={handleFeedbackBtn} /> : null}
    </div>
  );
}

export default Feedback;
