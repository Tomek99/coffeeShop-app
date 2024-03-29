import React from "react";
import styles from "./ArticleOverview.module.scss";
import { AiOutlineCalendar, AiOutlineUserAdd } from "react-icons/ai";
import BtnRead from "../../Buttons/BtnRead/BtnRead";

function ArticleOverview() {
  return (
    <div className={styles.ArticleOverview}>
      <div className={styles.divImg}>
        <img
          src="/images/about-img.jpeg"
          alt="beans ground instant coffee"
          className={styles.articleImg}
        />
      </div>
      <div className={styles.articleContent}>
        <h1 className={styles.articleTitle}>
          5 reasons why you should drink coffee in the morning
        </h1>

        <p className={styles.articleText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          posuere sapien. In felis ante, volutpat in dictum ac, vulputate a
          mauris. Donec consequat urna in risus molestie, ac fermentum augue
          laoreet. Donec aliquam commodo libero, vel scelerisque turpis volutpat
          a. Vestibulum dignissim tortor eu magna hendrerit, nec pretium erat
          scelerisque. Morbi lobortis pulvinar libero vel imperdiet.{" "}
        </p>
        <BtnRead />
        <div className={styles.articleDetails}>
          <span>
            <AiOutlineUserAdd size={15} />
            Adam Nowak
          </span>
          <span>
            <AiOutlineCalendar size={15} /> Oct 08, 2023
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArticleOverview;
