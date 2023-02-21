import React from "react";
import styles from "./Information.module.scss";
import PropTypes from "prop-types";

function Information({ header, paragraph, paragraph_2, children }) {
  return (
    <div className={styles.Information}>
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.paragraph}>{paragraph}</p>
      {paragraph_2 ? <br /> : null}
      {paragraph_2 ? <p className={styles.paragraph}>{paragraph_2}</p> : null}
      {children}
    </div>
  );
}
PropTypes.propTypes = {
  header: PropTypes.string,
  paragraph: PropTypes.string,
  paragraph_2: PropTypes.string,
};
export default Information;
