import React from "react";
import styles from "./Loader.module.scss";
import ClipLoader from "react-spinners/ClipLoader";
function Loader() {
  return (
    <div className={styles.Loader}>
      {" "}
      <ClipLoader color={"#fff"} size={150} className={styles.spinner} />
    </div>
  );
}

export default Loader;
