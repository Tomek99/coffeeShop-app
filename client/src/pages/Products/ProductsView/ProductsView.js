import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../Contexts/ProductsContext";
import { Context } from "../../../Contexts/Context";
import MedProductView from "./MediumProductView/MedProductView";
import LatestProduct from "../../../components/LatestProduct/LatestProduct";
import styles from "./ProductsView.module.scss";
import SmallProductView from "./SmallProductView/SmallProductView";
import optionsSortProductData from "../../../data/optionsSortProductData.json";

const SORT_OPTIONS = {
  OPTION_ONE: "From the most popular",
  OPTION_TWO: "From the most relevant",
  OPTION_THREE: "Customer rating: from the best",
  OPTION_FOUR: "Price: from the cheapest",
  OPTION_FIVE: "Price: from the most expensive",
};

function ProductsView({ selectedView, sortOption }) {
  const { data, pagesVisited, itemsPerPage } = useContext(ProductsContext);
  const { addItem, addWishItem, saveViewedProduct, wishList } =
    useContext(Context);

  const [products, setProducts] = useState(data);

  const sortProducts = (data, sortOption) => {
    switch (sortOption) {
      case SORT_OPTIONS.OPTION_ONE:
        return [...data].sort(
          (a, b) =>
            (b.productRatings?.length || 0) - (a.productRatings?.length || 0)
        );
      case SORT_OPTIONS.OPTION_TWO:
        return data;
      case SORT_OPTIONS.OPTION_THREE:
        return [...data].sort((a, b) => {
          const avgRatingA =
            a.productRatings?.reduce((sum, r) => sum + r, 0) /
            (a.productRatings?.length || 1);
          const avgRatingB =
            b.productRatings?.reduce((sum, r) => sum + r, 0) /
            (b.productRatings?.length || 1);
          return avgRatingB - avgRatingA;
        });
      case SORT_OPTIONS.OPTION_FOUR:
        return [...data].sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      case SORT_OPTIONS.OPTION_FIVE:
        return [...data].sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      default:
        return data;
    }
  };

  useEffect(() => {
    setProducts(sortProducts(data, sortOption));
  }, [data, sortOption]);

  return (
    <div>
      {" "}
      {(() => {
        switch (selectedView) {
          case 0:
            return (
              <div className={styles.largeProductsView}>
                {products
                  .slice(pagesVisited, pagesVisited + itemsPerPage)
                  .map((item, index) => (
                    <LatestProduct key={index} item={item} />
                  ))}
              </div>
            );

          case 1:
            return (
              <div className={styles.mediumProductsView}>
                {products
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
                {products
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
