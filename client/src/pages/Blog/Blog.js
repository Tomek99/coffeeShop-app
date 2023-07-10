import React from "react";
import styles from "./Blog.module.scss";
import {
  ArticleOverview,
  CarouselArticles,
  Categories,
  RecentPosts,
} from "../../components";

function Blog() {
  return (
    <div className={styles.Blog}>
      <CarouselArticles />
      <div className={styles.divInfo}>
        <div className={styles.divSticky}>
          <RecentPosts />
          <Categories />
        </div>
      </div>
      <div className={styles.divArticles}>
        <ArticleOverview />
        <ArticleOverview />
        <ArticleOverview />
        <ArticleOverview />
        <ArticleOverview />
        <ArticleOverview />
      </div>
    </div>
  );
}

export default Blog;
