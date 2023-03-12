import React from "react";
import PropTypes from "prop-types";
import styles from "./InputRadio.module.scss";
import { Field } from "formik";

function InputRadio({ item, index, activeIndex, icon, handleFieldValue }) {
  const { name, value, fee, id } = item;
  return (
    <div
      className={
        activeIndex === index
          ? `${styles.divRadio} ${styles.active}`
          : styles.divRadio
      }
    >
      <label htmlFor={id} className={styles.labelRadio}>
        <div className={styles.divInput}>
          <Field
            type="radio"
            id={id}
            name={name}
            value={value}
            // checked={option === stringyIndex}
            onClick={() => handleFieldValue(id, index)}
            className={
              activeIndex === index
                ? `${styles.inputRadio} ${styles.activeDot}`
                : styles.inputRadio
            }
          />
          <div className={styles.divTextDirection}>
            <span className={styles.textwidth}>{value}</span>
            {fee ? <span className={styles.fee}>{`(${fee})`}</span> : null}
          </div>
        </div>

        {icon ? icon : null}
      </label>
    </div>
  );
}

InputRadio.propTypes = {
  index: PropTypes.number,
  genericValue: PropTypes.string,
  selectedOption: PropTypes.string,
  handleInput: PropTypes.func,
  icon: PropTypes.object,
};
export default InputRadio;

// className={
//   option === stringyIndex
//     ? `${styles.InputRadioShopper} ${styles.active}`
//     : styles.InputRadioShopper
// }
