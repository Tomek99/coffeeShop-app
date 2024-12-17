import React, { useContext, useEffect, useState } from "react";
import styles from "./Products.module.scss";
import LatestProduct from "../../components/LatestProduct/LatestProduct";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import Pagination from "../../components/Pagination/Pagination";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import usePaginationHook from "../../hooks/usePaginationHook";
import useFetchData from "../../hooks/useFetchData";

function Products() {
  const apiProductEndpoint = `${process.env.REACT_APP_API_URI}/api/products`;
  const { isLoaded, data } = useFetchData(apiProductEndpoint);
  const {
    pageNumber,
    pagesVisited,
    pageCount,
    itemsPerPage,
    handleChangePage,
  } = usePaginationHook(0, data, 12, "/products");

  return (
    <div className={styles.Products}>
      {isLoaded ? (
        <LoaderSpinner loading={isLoaded} />
      ) : (
        <div className={styles.gridTemplate}>
          <div className={styles.itemsSection}>
            {data
              .slice(pagesVisited, pagesVisited + itemsPerPage)
              .map((item, index) => (
                <LatestProduct
                  key={index}
                  item={item}
                  cartFillId={`cartFillId${index}`}
                  showProductId={`showProductId${index}`}
                  wishlistId={`wishlistId${index}`}
                />
              ))}
          </div>
          <Pagination
            pageCount={pageCount}
            handleChangePage={handleChangePage}
          />
          <ScrollToTop pageNumber={pageNumber} />
        </div>
      )}
    </div>
  );
}

export default Products;
