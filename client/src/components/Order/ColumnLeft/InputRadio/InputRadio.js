import React from "react";
import PropTypes from "prop-types";
import styles from "./InputRadio.module.scss";

function InputRadio({ item, option, handleInput, index, icon }) {
  const { genericValue, text, fee } = item;

  const stringyIndex = JSON.stringify(index);
  return (
    <div
      className={
        option === stringyIndex
          ? `${styles.InputRadioShopper} ${styles.active}`
          : styles.InputRadioShopper
      }
    >
      <label htmlFor={genericValue} className={styles.labelRadio}>
        <div className={styles.divInput}>
          <input
            type="radio"
            id={genericValue}
            name={genericValue}
            value={index}
            checked={option === stringyIndex}
            onChange={handleInput}
            className={
              option === stringyIndex
                ? `${styles.inputRadio} ${styles.activeDot}`
                : styles.inputRadio
            }
          />
          <div className={styles.divTextDirection}>
            <span className={styles.textwidth}>{text}</span>
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
