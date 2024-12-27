import React, { useContext } from "react";
import { ProductsContext } from "../../../Contexts/ProductsContext";
import { Context } from "../../../Contexts/Context";
import MedProductView from "./MediumProductView/MedProductView";
import LatestProduct from "../../../components/LatestProduct/LatestProduct";
import styles from "./ProductsView.module.scss";
import SmallProductView from "./SmallProductView/SmallProductView";

function ProductsView({ selectedView }) {
  const { data, pagesVisited, itemsPerPage } = useContext(ProductsContext);
  const { addItem, addWishItem, saveViewedProduct, wishList } =
    useContext(Context);

  return (
    <div>
      {" "}
      {(() => {
        switch (selectedView) {
          case 0:
            return (
              <div className={styles.largeProductsView}>
                {data
                  .slice(pagesVisited, pagesVisited + itemsPerPage)
                  .map((item, index) => (
                    <LatestProduct key={index} item={item} />
                  ))}
              </div>
            );

          case 1:
            return (
              <div className={styles.mediumProductsView}>
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
          case 2:
            return (
              <div className={styles.smallProductsView}>
                {data
                  .slice(pagesVisited, pagesVisited + itemsPerPage)
                  .map((item, index) => (
                    <SmallProductView
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
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default ProductsView;
