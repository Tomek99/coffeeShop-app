import React from "react";
import styles from "./HeaderInfo.module.scss";
import PropTypes from "prop-types";

function HeaderInfo({ title }) {
  return <header className={styles.HeaderInfo}>{title}</header>;
}

HeaderInfo.propTypes = {
  title: PropTypes.string,
};
export default HeaderInfo;
