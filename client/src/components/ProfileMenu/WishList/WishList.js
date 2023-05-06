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

  const { wishList, products, addWishItem } = useContext(Context);

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
      <h3 className={styles.headline}>Products observed</h3>
      <div className={styles.WishListProducts}>
        {wishList.length ? (
          foundedProducts.map((item, index) => (
            <WishProducts key={index} item={item} addWishItem={addWishItem} />
          ))
        ) : (
          <p style={{ fontSize: "1.3rem" }}>
            No products added to the wishlist
          </p>
        )}
      </div>

      <Support />
    </>
  );
}

export default WishList;
