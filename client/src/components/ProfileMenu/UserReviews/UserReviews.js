import React, { useContext, useEffect, useState } from "react";
import styles from "./UserReviews.module.scss";
import Support from "../Support/Support";
import Review from "./Review/Review";
import Feedback from "./Feedback/Feedback";
import HeaderInfo from "../../HeaderInfo/HeaderInfo";
import HeadingThree from "../../HeadingThree/HeadingThree";
import axios from "axios";
import { Context } from "../../../Contexts/Context";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import Pagination from "../../Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import usePaginationHook from "../../../hooks/usePaginationHook";

function UserReviews() {
  const { user } = useContext(Context);

  const [feedbacks, setFeedbacks] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const products = await axios.get(
          `${process.env.REACT_APP_API_URI}/api/reviews/user-reviews/${user._id}`
        );
        setFeedbacks(
          products.data
            .filter((item) => item.isCheckedReview !== true)
            .sort(
              (a, b) => new Date(b.userReviewDate) - new Date(a.userReviewDate)
            )
        );

        setReviews(
          products.data
            .filter((item) => item.isCheckedReview !== false)
            .sort(
              (a, b) => new Date(b.userReviewDate) - new Date(a.userReviewDate)
            )
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [user._id]);

  /* Pagination */

  const {
    pageNumber,
    pagesVisited,
    pageCount,
    itemsPerPage,
    handleChangePage,
  } = usePaginationHook(0, reviews, 5, "/user-reviews");

  // "/admin/products"
  return (
    <>
      <HeaderInfo title="Reviews" />
      <div className={styles.divRow}>
        <HeadingThree title="Give feedback" />
        <span>&nbsp;({feedbacks.length})</span>
      </div>
      <div className={styles.divColumn}>
        {loading ? (
          <LoaderSpinner loading={loading} />
        ) : (
          feedbacks.map((item, i) => <Feedback key={i} item={item} />)
        )}
      </div>
      <div className={styles.divRow}>
        <HeadingThree title="Your reviews" />
        <span>&nbsp;({reviews.length})</span>
      </div>
      <div className={styles.reviewsColumn}>
        {loading ? (
          <LoaderSpinner loading={loading} />
        ) : (
          reviews
            .slice(pagesVisited, pagesVisited + itemsPerPage)
            .map((item, i) => <Review key={i} item={item} />)
        )}
      </div>
      {reviews.length > 5 ? (
        <Pagination pageCount={pageCount} handleChangePage={handleChangePage} />
      ) : null}
      <Support />
      <ScrollToTop pageNumber={pageNumber} />
    </>
  );
}

export default UserReviews;
