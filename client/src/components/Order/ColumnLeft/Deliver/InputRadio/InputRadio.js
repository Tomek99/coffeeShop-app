import React from "react";
import PropTypes from "prop-types";

function InputRadio({ item, selectedOption, handleInput }) {
  const { genericValue, text } = item;
  return (
    <div>
      <label for={genericValue}>
        <input
          type="radio"
          id={genericValue}
          name={genericValue}
          value={genericValue}
          checked={selectedOption === genericValue}
          onChange={handleInput}
        />
        <span>{text}</span>
      </label>
    </div>
  );
}

InputRadio.propTypes = {
  genericValue: PropTypes.string,
  selectedOption: PropTypes.string,
  handleOptionChange: PropTypes.func,
};
export default InputRadio;
