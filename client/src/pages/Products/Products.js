import React, { useContext, useEffect, useState } from "react";
import styles from "./Products.module.scss";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { Context } from "../../Contexts/Context";
import LatestProduct from "../../components/LatestProduct/LatestProduct";
import Pagination from "../../components/Pagination/Pagination";
import { useNavigate } from "react-router-dom";

function Products() {
  const { products } = useContext(Context);

  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(0);

  const PRODUCTS_PER_PAGE = 12;
  const pagesVisited = pageNumber * PRODUCTS_PER_PAGE;
  const pageCount = Math.round(products.length / PRODUCTS_PER_PAGE);

  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);

    navigate({
      pathname: "/products",
      search: selected !== 0 ? `?page=${selected + 1}` : null,
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pageNumber]);
  return (
    <div className={styles.Products}>
      <HeaderSection firstWord="our" secondWord="products" />
      <div className={styles.itemsSection}>
        {products
          .slice(pagesVisited, pagesVisited + PRODUCTS_PER_PAGE)
          .map((item, index) => (
            <LatestProduct key={index} item={item} />
          ))}
      </div>
      <div className={styles.productPagination}>
        <Pagination pageCount={pageCount} handleChangePage={handleChangePage} />
      </div>
    </div>
  );
}

export default Products;
