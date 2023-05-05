import React, { useContext, useEffect } from "react";
import styles from "./WishList.module.scss";

import WishProducts from "./WishProducts/WishProducts";
import Support from "../Support/Support";
import HeaderInfo from "../../HeaderInfo/HeaderInfo";
import { Context } from "../../../Contexts/Context";

function WishList() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const { wishList, products } = useContext(Context);

  let foundedProducts = [];

  for (let i = 0; i < wishList.length; i++) {
    const element = wishList[i];
    for (let j = 0; j < products.length; j++) {
      if (element === products[j]._id) {
        foundedProducts.push(products[j]);
      }
    }
  }
  return (
    <>
      <div className={styles.WishList}>
        <HeaderInfo title="Wish list" />
      </div>
      <div>Products observed</div>
      <div className={styles.WishListProducts}>
        {wishList.length ? (
          foundedProducts.map((item, index) => (
            <WishProducts key={index} item={item} />
          ))
        ) : (
          <div>No products added to the wishlist</div>
        )}
      </div>

      <Support />
    </>
  );
}

export default WishList;
