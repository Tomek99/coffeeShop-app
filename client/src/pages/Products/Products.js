import React, { useContext, useEffect, useState } from "react";
import styles from "./Products.module.scss";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { Context } from "../../Contexts/Context";
import LatestProduct from "../../components/LatestProduct/LatestProduct";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import Pagination from "../../components/Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

function Products() {
  const { products, loading } = useContext(Context);

  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(0);

  const PRODUCTS_PER_PAGE = 12;
  const pagesVisited = pageNumber * PRODUCTS_PER_PAGE;
  const pageCount = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);

    navigate({
      pathname: "/products",
      search: selected !== 0 ? `?page=${selected + 1}` : null,
    });
  };

  return (
    <div className={styles.Products}>
      {loading ? (
        <LoaderSpinner loading={loading} />
      ) : (
        <div className={styles.gridTemplate}>
          <div className={styles.itemsSection}>
            {products
              .slice(pagesVisited, pagesVisited + PRODUCTS_PER_PAGE)
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
