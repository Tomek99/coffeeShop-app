import React from "react";
import styles from "./BlogsSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import LatestBlog from "../LatestBlog/LatestBlog";
import Blog from "../../data/blog.json";
import PropTypes from "prop-types";

function BlogsSection({ isTrue, handleBlog }) {
  return (
    <div className={styles.BlogsSection} id="blogsSection">
      <HeaderSection firstWord="our" secondWord="blogs" />
      <div className={styles.blogs}>
        {isTrue
          ? Blog.slice(0, 3).map((item) => (
              <LatestBlog
                url={item.imageUrl}
                key={item.id}
                id={item.id}
                title={item.title}
                text={item.text.slice(0, 55)}
                addedBy={item.addedBy}
                handleBlog={handleBlog}
              />
            ))
          : Blog.map((item) => (
              <LatestBlog
                url={item.imageUrl}
                key={item.id}
                id={item.id}
                title={item.title}
                text={item.text.slice(0, 55)}
                addedBy={item.addedBy}
                handleBlog={handleBlog}
              />
            ))}
      </div>
    </div>
  );
}
BlogsSection.propTypes = {
  isTrue: PropTypes.bool,
  handleBlog: PropTypes.func,
};

export default BlogsSection;
