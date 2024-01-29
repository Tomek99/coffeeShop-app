import React from "react";
import styles from "./BtnDefault.module.scss";
import { useNavigate } from "react-router-dom";

function BtnDefault({ route, text }) {
  const navigate = useNavigate();

  function goToPage() {
    navigate(`/${route}`);
  }
  return (
    <button onClick={goToPage} className={styles.BtnDefault}>
      {text}
    </button>
  );
}

export default BtnDefault;
