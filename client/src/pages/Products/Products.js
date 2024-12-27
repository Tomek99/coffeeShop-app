import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";
import styles from "./Products.module.scss";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import Pagination from "../../components/Pagination/Pagination";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import usePaginationHook from "../../hooks/usePaginationHook";
import useFetchData from "../../hooks/useFetchData";
import ProductControlView from "../../components/ProductControlView/ProductControlView";
import ProductsView from "./ProductsView/ProductsView";

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

  const [isClicked, setIsClicked] = useState(false);
  const [selectedView, isSelectedView] = useState(0);

  function handleArrow() {
    setIsClicked(!isClicked);
  }

  function selectView(number) {
    if (selectedView !== number) {
      setIsClicked(!isClicked);
      isSelectedView(number);
    }
  }

  return (
    <ProductsContext.Provider value={{ data, pagesVisited, itemsPerPage }}>
      <div className={styles.Products}>
        {isLoaded ? (
          <LoaderSpinner loading={isLoaded} />
        ) : (
          <div className={styles.productsLayout}>
            <ProductControlView
              isClicked={isClicked}
              selectedView={selectedView}
              handleArrow={handleArrow}
              selectView={selectView}
            />

            <ProductsView selectedView={selectedView} />

            <Pagination
              pageCount={pageCount}
              handleChangePage={handleChangePage}
            />
            <ScrollToTop pageNumber={pageNumber} />
          </div>
        )}
      </div>
    </ProductsContext.Provider>
  );
}

export default Products;
