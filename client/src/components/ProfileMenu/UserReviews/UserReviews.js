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

function UserReviews() {
  const { user } = useContext(Context);

  const [feedbacks, setFeedbacks] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const products = await axios.get(
          `${process.env.REACT_APP_API_URI}/api/reviews/user-reviews/${user._id}`
        );
        setFeedbacks(
          products.data.filter((item) => item.isCheckedReview !== true)
        );
        setReviews(
          products.data
            .reverse()
            .filter((item) => item.isCheckedReview !== false)
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [user._id]);
  /// Plan pobrać receznje z serwera, dodawanie recenzji, dodawanie likes, dislikes

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
      <div className={styles.divColumn}>
        {loading ? (
          <LoaderSpinner loading={loading} />
        ) : (
          reviews.reverse().map((item, i) => <Review key={i} item={item} />)
        )}
      </div>
      <Support />
    </>
  );
}

export default UserReviews;
