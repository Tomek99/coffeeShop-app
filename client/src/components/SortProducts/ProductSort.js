import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import styles from "./ProductSort.module.scss";
import { useClickAway } from "use-click-away";

const sortOptionsArray = [
  { id: 0, option: "From the most popular" },
  { id: 1, option: "From the most relevant" },
  { id: 2, option: "Customer rating: from the best" },
  { id: 3, option: "Price: from the cheapest" },
  { id: 4, option: "Price: from the most expensive" },
];

function ProductSort() {
  const [isClicked, setIsClicked] = useState(false);
  const [sortOption, setSortOption] = useState("From the most popular");

  const clickRef = React.useRef("");

  useClickAway(clickRef, () => {
    setIsClicked(false);
  });

  function handleProductSortMenu() {
    setIsClicked(!isClicked);
  }

  function selectOption(option) {
    setSortOption(option);
    handleProductSortMenu();
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
          {sortOptionsArray.map((item, i) => (
            <span
              key={i}
              onClick={() => selectOption(item.option)}
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
