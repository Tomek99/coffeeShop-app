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
  for (const element of wishList) {
    const foundElement = products.find((item) => element === item._id);
    foundedProducts.push(foundElement);
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
