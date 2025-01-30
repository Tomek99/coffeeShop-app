import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import styles from "./ProductSort.module.scss";
import { useClickAway } from "use-click-away";
import optionsSortProductData from "../../data/optionsSortProductData.json";

function ProductSort({ sortOption, selectSortOption }) {
  const [isClicked, setIsClicked] = useState(false);

  const clickRef = React.useRef("");

  useClickAway(clickRef, () => {
    setIsClicked(false);
  });

  function handleProductSortMenu() {
    setIsClicked(!isClicked);
  }

  return (
    <div
      ref={clickRef}
      className={
        isClicked
          ? `${styles.ProductSort} ${styles.ProductSortActivated}`
          : styles.ProductSort
      }
    >
      <div onClick={handleProductSortMenu} className={styles.divBtn}>
        <span className={styles.spanSelectedOption}>{sortOption}</span>
        <span>
          {isClicked ? (
            <TiArrowSortedUp size={15} />
          ) : (
            <TiArrowSortedDown size={15} />
          )}
        </span>
      </div>
      {isClicked ? (
        <div className={styles.divOptions}>
          {optionsSortProductData.map((item, i) => (
            <span
              key={i}
              onClick={() =>
                selectSortOption(item.option, handleProductSortMenu)
              }
              className={
                sortOption === item.option
                  ? `${styles.spanSortOption} ${styles.spanActived}`
                  : styles.spanSortOption
              }
            >
              {item.option}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ProductSort;
