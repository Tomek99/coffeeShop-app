import React from "react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";
import { RiArrowLeftSLine } from "react-icons/ri";

function Pagination({ pageCount, handleChangePage }) {
  return (
    <div className={styles.pagination}>
      <ReactPaginate
        previousLabel={<RiArrowLeftSLine size={25} />}
        nextLabel="Next "
        pageCount={pageCount}
        onPageChange={handleChangePage}
        containerClassName={styles.paginationBttns}
        previousLinkClassName={styles.previousBttn}
        nextLinkClassName={styles.nextBttn}
        pageClassName={styles.pageNumbers}
      ></ReactPaginate>
    </div>
  );
}

export default Pagination;
