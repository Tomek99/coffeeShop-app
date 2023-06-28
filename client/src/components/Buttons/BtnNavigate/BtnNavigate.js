import React from "react";
import styles from "./BtnNavigate.module.scss";
import { useNavigate } from "react-router-dom";

function BtnNavigate({ redirectPage, text }) {
  const navigate = useNavigate();
  function handleBtn() {
    navigate(redirectPage);
  }

  return (
    <button className={styles.BtnNavigate} onClick={handleBtn}>
      {text}
    </button>
  );
}

export default BtnNavigate;
