import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { useClickAway } from "use-click-away";
import styles from "./Products.module.scss";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import Pagination from "../../components/Pagination/Pagination";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import usePaginationHook from "../../hooks/usePaginationHook";
import useFetchData from "../../hooks/useFetchData";
import ProductControlView from "../../components/ProductControlView/ProductControlView";
import ProductsView from "./ProductsView/ProductsView";
import { json } from "react-router-dom";

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

  const [selectedView, setSelectedView] = useState(() => {
    const storedValue = localStorage.getItem("product-view");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return 0;
  });

  function selectView(number, collapseViewMenu) {
    if (selectedView !== number) {
      setSelectedView(number);
      localStorage.setItem("product-view", JSON.stringify(number));
      collapseViewMenu();
    }
  }

  const [sortOption, setSortOption] = useState("From the most relevant");
  function selectSortOption(option, collapseSortMenu) {
    setSortOption(option);
    collapseSortMenu();
  }

  return (
    <ProductsContext.Provider value={{ data, pagesVisited, itemsPerPage }}>
      <div className={styles.Products}>
        {isLoaded ? (
          <LoaderSpinner loading={isLoaded} />
        ) : (
          <div className={styles.productsLayout}>
            <ProductControlView
              selectedView={selectedView}
              selectView={selectView}
              sortOption={sortOption}
              selectSortOption={selectSortOption}
            />
            <ProductsView selectedView={selectedView} sortOption={sortOption} />
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
