import React, { useEffect, useState } from "react";
import styles from "./AdminProducts.module.scss";
import axios from "axios";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import AdminProduct from "./AdminProduct/AdminProduct";
import BtnAddNewProduct from "../../Buttons/BtnAddNewProduct/BtnAddNewProduct";
import AdminAddNewProduct from "./AdminProduct/AdminAddNewProduct/AdminAddNewProduct";
import Pagination from "../../Pagination/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import usePaginationHook from "../../../hooks/usePaginationHook";
import useFetchData from "../../../hooks/useFetchData";

function AdminProducts() {
  const [newProductIsDisplayed, setNewProductIsDisplayed] = useState(false);
  function handleNewProductIsDisplayed() {
    setNewProductIsDisplayed(!newProductIsDisplayed);
  }

  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/products`;
  const { isLoaded, data } = useFetchData(apiEndpoint);

  const {
    pageNumber,
    pagesVisited,
    pageCount,
    itemsPerPage,
    handleChangePage,
  } = usePaginationHook(0, data, 10, "/admin/products");

  return isLoaded ? (
    <LoaderSpinner />
  ) : (
    <div className={styles.AdminProducts}>
      <div>
        <BtnAddNewProduct
          handleNewProductIsDisplayed={handleNewProductIsDisplayed}
        />
        {newProductIsDisplayed ? (
          <AdminAddNewProduct
            handleNewProductIsDisplayed={handleNewProductIsDisplayed}
          />
        ) : null}
      </div>
      <section className={styles.productsSection}>
        {data
          .slice(pagesVisited, pagesVisited + itemsPerPage)
          .map((product, index) => (
            <AdminProduct product={product} key={index} />
          ))}
      </section>
      <Pagination handleChangePage={handleChangePage} pageCount={pageCount} />
      <ScrollToTop pageNumber={pageNumber} />
    </div>
  );
}

export default AdminProducts;
