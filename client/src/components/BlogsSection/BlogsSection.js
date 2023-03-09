import React from "react";
import styles from "./BlogsSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import LatestBlog from "../LatestBlog/LatestBlog";
import Blog from "../../data/blog.json";
import PropTypes from "prop-types";

function BlogsSection({ isTrue }) {
  return (
    <div className={styles.BlogsSection} id="blogsSection">
      <HeaderSection firstWord="our" secondWord="blogs" />
      <div className={styles.blogs}>
        {isTrue
          ? Blog.slice(0, 3).map((item, index) => (
              <LatestBlog
                key={index}
                item={item}
                text={item.text.slice(0, 55)}
              />
            ))
          : Blog.map((item, index) => (
              <LatestBlog
                key={index}
                item={item}
                text={item.text.slice(0, 55)}
              />
            ))}
      </div>
    </div>
  );
}
BlogsSection.propTypes = {
  isTrue: PropTypes.bool,
};

export default BlogsSection;
