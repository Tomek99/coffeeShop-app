import React from "react";
import styles from "./WishInfo.module.scss";

const info = [
  {
    nr: 1,
    title: "Add products to cart and save as list",
    text: "Saving the products your are intrested in for later and don't waste time looking for them again. ",
  },
  {
    nr: 2,
    title: "Create as many lists as you need ",
    text: "You can create as many shopping lists as you want. Save computer sets, gift ideas or suggestions for friends. ",
  },
  {
    nr: 3,
    title: "Share",
    text: "Do you want to advise your familly or ask your friends about view? Share list with them, instead of sending each link separately ",
  },
];
function WishInfo() {
  return (
    <div className={styles.WishInfo}>
      <h2 className={styles.mainTittle}>How to utilize a shopping list?</h2>
      <div className={styles.divInfo}>
        {info.map((item) => (
          <div key={item.nr} className={styles.divRow}>
            <h3 className={styles.number}>{item.nr}. &nbsp;&nbsp;</h3>
            <div className={styles.divColumn}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishInfo;
