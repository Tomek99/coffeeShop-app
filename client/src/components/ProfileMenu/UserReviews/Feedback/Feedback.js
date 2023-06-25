import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Feedback.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
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
          <Link
            className={styles.showMore}
            style={{ color: "var(--text-color)" }}
          >
            {item.productName}
          </Link>
          <Link
            className={styles.showMore}
            style={{ color: "var(--text-color)" }}
          >
            {item.createdAt}
          </Link>
        </div>
      </div>
      <div className={styles.divRowSecond}>
        <BtnDots />
        <div className={styles.rating} onClick={handleFeedbackBtn}>
          <RatingsStars size="large" rate={null} name="no-value" tab={1} />
        </div>
        <BtnFeedback handleBtn={handleFeedbackBtn} />
        {show ? <AddFeedback handleBtn={handleFeedbackBtn} /> : null}
      </div>
      {show ? <BlurScreen handleBlurScreen={handleFeedbackBtn} /> : null}
    </div>
  );
}

export default Feedback;
