import React, { useContext } from "react";
import { Context } from "../../Contexts/Context";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import HeadingThree from "../HeadingThree/HeadingThree";

import styles from "./Summary.module.scss";

function Summary() {
  const { order } = useContext(Context);
  console.log(console.log(order));
  return (
    <div className={styles.Summary}>
      <div className={styles.gridTemplate}>
        <HeaderInfo title="Summary" />
        <div>
          <HeadingThree title="Deliver" />
        </div>
        <div>
          <HeadingThree title="You are purchasing as" />
        </div>
        <div>
          <HeadingThree title="Delivery address" />
        </div>
        <div>
          <HeadingThree title="Company invoice details" />
        </div>
        <div>
          <HeadingThree title="Payment" />
        </div>
        <div>
          <HeadingThree title="Cart" />
        </div>
        <div>
          <HeadingThree title="Comment to order" />
        </div>
      </div>
    </div>
  );
}

export default Summary;
