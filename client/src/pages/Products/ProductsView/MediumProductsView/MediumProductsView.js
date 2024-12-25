import React, { useContext } from "react";
import { ProductsContext } from "../../../../Contexts/ProductsContext";
import styles from "./MediumProductsView.module.scss";
import MedProductView from "./MedProductView/MedProductView";
import { Context } from "../../../../Contexts/Context";

function MediumProductsView() {
  const { data, pagesVisited, itemsPerPage } = useContext(ProductsContext);
  const { addItem, addWishItem, saveViewedProduct, wishList } =
    useContext(Context);

  return (
    <div className={styles.MediumProductsView}>
      {data
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((item, index) => (
          <MedProductView
            key={index}
            item={item}
            addItem={addItem}
            addWishItem={addWishItem}
            saveViewedProduct={saveViewedProduct}
            wishList={wishList}
          />
        ))}
    </div>
  );
}

export default MediumProductsView;
