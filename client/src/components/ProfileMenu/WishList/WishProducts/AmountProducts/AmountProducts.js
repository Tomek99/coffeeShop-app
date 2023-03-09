import React from "react";
import styles from "./AmountProducts.module.scss";
import { BsHeart } from "react-icons/bs";
import { useWindowWidth } from "@react-hook/window-size";

const imgList = [
  {
    id: 1,
    url: "/images/product-1.png",
  },
  {
    id: 2,
    url: "/images/product-2.png",
  },
  {
    id: 3,
    url: "/images/product-3.png",
  },
  {
    id: 4,
    url: "/images/product-1.png",
  },
  {
    id: 6,
    url: "/images/product-2.png",
  },
  {
    id: 7,
    url: "/images/product-2.png",
  },
];
function AmountProducts() {
  const width = useWindowWidth();
  let hiddenElements = imgList.length;

  let items = [...imgList];

  //   console.log(imgList.slice(0, 2));
  if (width < 350) {
    items = items.slice(0, 2);
  } else if (width < 400) {
    items = items.slice(0, 3);
  } else if (width < 500) {
    items = items.slice(0, 4);
  } else if (width < 600) {
    items = items.slice(0, 5);
  } else if (width < 700) {
    items = items.slice(0, 6);
  } else if (width < 800) {
    items = items.slice(0, 7);
  } else if (width < 1000) {
    items = items.slice(0, 8);
  } else if (width < 1100) {
    items = items.slice(0, 9);
  } else {
    items = items.slice(0, 9);
  }
  hiddenElements -= items.length;

  return (
    <div className={styles.productList}>
      {imgList.length === 0 ? (
        <>
          {" "}
          <span>
            <BsHeart size={20} />
          </span>
          <p>The list is empty - add products</p>
        </>
      ) : (
        items.map((item) => (
          <img
            src={item.url}
            alt={item.id}
            key={item.id}
            className={styles.imgProduct}
          />
        ))
      )}
      {hiddenElements !== 0 ? (
        <div className={styles.hiddenElements}>
          <span>+{hiddenElements}</span>
        </div>
      ) : null}
    </div>
  );
}

export default AmountProducts;
