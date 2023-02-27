import React, { useState } from "react";
import Deliver from "./ColumnLeft/Deliver/Deliver";
import ExtraInfo from "./ColumnLeft/ExtraInfo/ExtraInfo";
import Invoice from "./ColumnLeft/Invoice/Invoice";
import styles from "./Order.module.scss";
import Payment from "./ColumnLeft/Payment/Payment";
import Recipient from "./ColumnLeft/Recipient/Recipient";
import Shopper from "./ColumnLeft/Shopper/Shopper";
import DisplayProducts from "./ColumnRight/DisplayProducts/DisplayProducts";
import DeliverMethod from "./ColumnRight/DeliverMethod/DeliverMethod";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import Company from "./ColumnLeft/Comapny/Company";

function Order() {
  const [selectedOption, setSelectedOption] = useState("");
  const [shopper, setShopper] = useState("");

  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
  }

  function handleShopper(e) {
    setShopper(e.target.value);
  }

  return (
    <div className={styles.Order}>
      <div className={styles.gridTemplate}>
        <div className={styles.columnLeft}>
          <HeaderInfo title="Deliver and payment" />
          <div className={styles.cardFeature}>
            <Deliver
              handleOptionChange={handleOptionChange}
              selectedOption={selectedOption}
            />
            <Shopper handleShopper={handleShopper} shopper={shopper} />
            {shopper === "company" ? <Company /> : null}
            <Recipient />
            {shopper === "privatePerson" ? <Invoice /> : null}
            <Payment />
            <ExtraInfo />
          </div>
        </div>
        <div className={styles.columnRight}>
          <div>
            <DisplayProducts />
            <DeliverMethod />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
