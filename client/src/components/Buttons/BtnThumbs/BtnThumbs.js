import React, { useContext, useState } from "react";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { Context } from "../../../Contexts/Context";
import axios from "axios";
import styles from "./BtnThumbs.module.scss";

function BtnThumbs({ item }) {
  const { notify, notifyError, user } = useContext(Context);
  const [likes, setLikes] = useState(item.likes);
  const [dislikes, setDislikes] = useState(item.dislikes);

  async function handleThumb(rate) {
    if (user._id) {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URI}/api/reviews/rate-review`,
        {
          reviewId: item._id,
          userId: user._id,
          rate,
        }
      );

      if (res.data) {
        if (rate !== "0") setLikes(likes + 1);
        else {
          setDislikes(dislikes + 1);
        }
        notify("Thank you for your vote");
      } else {
        notifyError("You can only vote once for each comment");
      }
    } else {
      notifyError("You cannot vote if you are not logged in.");
    }
  }

  return (
    <div className={styles.BtnThumbs}>
      <button
        className={styles.thumb}
        onClick={() => handleThumb("1")}
        data-cy="thumbUpBtn"
      >
        <BsHandThumbsUp size={20} className={styles.thumb} />
      </button>
      <span>{likes}</span>
      <button
        className={styles.thumb}
        onClick={() => handleThumb("0")}
        data-cy="thumbDownBtn"
      >
        {" "}
        <BsHandThumbsDown className={styles.thumb} size={20} />
      </button>
      <span>{dislikes}</span>
    </div>
  );
}

export default BtnThumbs;
