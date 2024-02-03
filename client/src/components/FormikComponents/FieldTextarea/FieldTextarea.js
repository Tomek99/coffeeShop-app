import { ErrorMessage, Field } from "formik";
import React, { useEffect, useRef, useState } from "react";
import ErrMessage from "../../ErrorMessage/ErrMessage";
import styles from "./FieldTextarea.module.scss";

function FieldTextarea({ setFieldValue }) {
  const [remainingChars, setRemainingChars] = useState(0);

  const handleInputChange = (event, setFieldValue) => {
    const inputLength = event.target.value.length;
    const charsLeft = inputLength;
    setRemainingChars(charsLeft);
    setFieldValue("message", event.target.value);
  };

  return (
    <div className={styles.TextareaCom}>
      <Field
        as="textarea"
        id="message"
        name="message"
        maxLength={999}
        placeholder="Your message"
        onChange={(e) => handleInputChange(e, setFieldValue)}
        rows={1}
      />
      <span className={styles.countLength}>{remainingChars}/999</span>
      <ErrMessage name="message" />
    </div>
  );
}

export default FieldTextarea;
