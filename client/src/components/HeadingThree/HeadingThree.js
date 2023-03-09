import React from "react";
import PropTypes from "prop-types";
import styles from "./HeadingThree.module.scss";

function HeadingThree({ title }) {
  return <h3 className={styles.HeadingThree}>{title}</h3>;
}

HeadingThree.propTypes = {
  title: PropTypes.string,
};
export default HeadingThree;
