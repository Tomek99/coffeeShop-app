import React, { useContext } from "react";
import { ProductsContext } from "../../../Contexts/ProductsContext";
import { Context } from "../../../Contexts/Context";
import MedProductView from "./MediumProductView/MedProductView";
import LatestProduct from "../../../components/LatestProduct/LatestProduct";
import styles from "./ProductsView.module.scss";
import SmallProductView from "./SmallProductView/SmallProductView";
import optionsSortProductData from "../../../data/optionsSortProductData.json";

const sortOptionsArray = [
  { id: 0, option: "From the most popular" },
  { id: 1, option: "From the most relevant" },
  { id: 2, option: "Customer rating: from the best" },
  { id: 3, option: "Price: from the cheapest" },
  { id: 4, option: "Price: from the most expensive" },
];

function ProductsView({ selectedView, sortOption }) {
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
