import React, { useContext } from "react";
import LatestProduct from "../../../../components/LatestProduct/LatestProduct";
import styles from "./LargeProductsView.module.scss";
import { ProductsContext } from "../../../../Contexts/ProductsContext";

function LargeProductsView() {
  const { data, pagesVisited, itemsPerPage } = useContext(ProductsContext);

  return (
    <div className={styles.LargeProductsView}>
      {data
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((item, index) => (
          <LatestProduct key={index} item={item} />
        ))}
    </div>
  );
}

export default LargeProductsView;
