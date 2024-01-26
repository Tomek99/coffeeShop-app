import React, { useState } from "react";
import styles from "./TextareaCom.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import PropTypes from "prop-types";

function TextareaCom({ setFieldValue, index }) {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setFieldValue("comment", e.target.value);
    setValue(e.target.value);
  }
  return (
    <div className={styles.TextareaCom}>
      <TextareaAutosize
        onChange={handleChange}
        placeholder="Your comment"
        value={value}
        name="comment"
        maxLength={999}
        id={index}
      />
      <span className={styles.countLength}>{value.length}/999</span>
    </div>
  );
}
TextareaCom.propTypes = {
  val: PropTypes.string,
  handleChange: PropTypes.func,
};
export default TextareaCom;
