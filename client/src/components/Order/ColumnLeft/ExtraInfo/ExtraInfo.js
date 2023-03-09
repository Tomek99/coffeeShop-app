import React, { useState, useRef, useEffect } from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./ExtraInfo.module.scss";
import BtnMore from "../../../Buttons/BtnMore/BtnMore";
import TextareaAutosize from "react-textarea-autosize";
import ConciseInfo from "./ConciseInfo/ConciseInfo";

function ExtraInfo() {
  const [showComment, setShowComment] = useState(false);
  const [showConsent, setShowConsent] = useState(false);

  const conciseInfo =
    "We read all points, so if you add them - it might affect the delivery time.";

  function handleComment() {
    setShowComment(!showComment);
  }

  function handleConsent() {
    setShowConsent(!showConsent);
  }

  const [val, setVal] = useState("");

  function handleChange(event) {
    setVal(event.target.value);
  }

  return (
    <div className={styles.ExtraInfo}>
      <HeadingThree title="Extra information" />
      <div className={styles.divStyle}>
        <h4>Comment on the order</h4>
        <ConciseInfo text={conciseInfo} />
        <div className={styles.divContent}>
          <label htmlFor="comment" className={styles.labelCheckBox}>
            <input
              id="comment"
              type="checkbox"
              className={styles.bgInput}
              onClick={handleComment}
            />{" "}
            I want to add comment to order
          </label>
          {showComment ? (
            <div className={styles.divTextArea}>
              <TextareaAutosize
                onChange={handleChange}
                placeholder="Your comments"
              />
              <span className={styles.countLength}>{val.length}/1999</span>
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.divStyle}>
        <h4>Formal consents</h4>
        <div className={styles.divContent}>
          <label htmlFor="consent" className={styles.labelCheckBox}>
            <input id="consent" type="checkbox" className={styles.bgInput} />{" "}
            <span>
              I would like to share my opinion on satisfaction with my purchases
            </span>
            <BtnMore handleBtn={handleConsent} />
          </label>
          {showConsent ? (
            <p className={styles.showParagraph}>
              I agree to receive electronic surveys that will allow me to assess
              my satisfaction with purchases in the coffe shop store, within the
              framework of the Trusted Opinions program. I agree to provide my
              personal data, including e-mail address and information about my
              purchase in the coffe shop store to Ceneo Sp. z o.o. with its seat
              in Jarosław, 25 XYZ St., 00-000 Jaroslaw, and their processing by
              Ceneo.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ExtraInfo;
