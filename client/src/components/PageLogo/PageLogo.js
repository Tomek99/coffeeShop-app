import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageLogo.module.scss";

function PageLogo() {
  return (
    <div className={styles.PageLogo}>
      <Link to="/">
        {" "}
        <img
          src="https://res.cloudinary.com/dvoduabha/image/upload/v1687425664/logo1_iw4cvy.png"
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default PageLogo;
