import React from "react";
import styles from "./BtnsViewDelete.module.scss";
import { ImBin } from "react-icons/im";
import { BsFillEyeFill } from "react-icons/bs";
import { useWindowWidth } from "@react-hook/window-size";

function BtnsViewDelete({ tab, btnHandle, id }) {
  const onlyWidth = useWindowWidth();
  const MAX_WIDTH = 750;

  return (() => {
    switch (tab) {
      case "show":
        if (onlyWidth > MAX_WIDTH)
          return (
            <button
              className={styles.BtnsViewDelete}
              onClick={() => btnHandle(id)}
            >
              View
            </button>
          );
        return (
          <button
            className={styles.BtnsViewDeleteTwo}
            onClick={() => btnHandle(id)}
          >
            <BsFillEyeFill />
          </button>
        );

      case "delete":
        if (onlyWidth > MAX_WIDTH)
          return (
            <button
              className={styles.BtnsViewDelete}
              onClick={() => btnHandle(id)}
            >
              Delete
            </button>
          );
        return (
          <button
            className={styles.BtnsViewDeleteTwo}
            onClick={() => btnHandle(id)}
          >
            <ImBin />
          </button>
        );
      default:
        return null;
    }
  })();
}

export default BtnsViewDelete;
