import React, { useState } from "react";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import styles from "./AdminReviews.module.scss";
import useFetchData from "../../../hooks/useFetchData";
import AdminRatedReviews from "./AdminRatedReviews/AdminRatedReviews";
import AdminCheckingReviews from "./AdminCheckingReviews/AdminCheckingReviews";

import BtnChangePage from "../../Buttons/BtnChangePage/BtnChangePage";

function AdminReviews() {
  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/reviews`;
  const { isLoaded, data } = useFetchData(apiEndpoint);
  const ratedReviews = data.filter(
    (item) =>
      item.isUserAddedReview === true &&
      ["rejected", "approved"].includes(item.isModeratorApprovedReview)
  );

  const checkingReviews = data.filter(
    (item) =>
      item.isUserAddedReview === true &&
      item.isModeratorApprovedReview === "checking"
  );

  const [selectedPage, setSelectedPage] = useState("checkingReviews");
  function handlePage(page) {
    setSelectedPage(page);
  }

  return isLoaded ? (
    <LoaderSpinner loading={isLoaded} />
  ) : (
    <section className={styles.AdminReviews}>
      <div className={styles.btnsDiv}>
        <BtnChangePage
          textBtn="Checking reviews"
          handlePage={handlePage}
          selectedpage={selectedPage}
          adjustedPage="checkingReviews"
        />
        <BtnChangePage
          textBtn="Rated reviews"
          handlePage={handlePage}
          selectedpage={selectedPage}
          adjustedPage="ratedReviews"
        />
      </div>

      {(() => {
        switch (selectedPage) {
          case "checkingReviews":
            return <AdminCheckingReviews data={checkingReviews} />;
          case "ratedReviews":
            return <AdminRatedReviews data={ratedReviews} />;
          default:
            return null;
        }
      })()}
    </section>
  );
}

export default AdminReviews;
