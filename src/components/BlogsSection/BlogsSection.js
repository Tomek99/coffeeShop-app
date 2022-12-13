import React from "react";
import styles from "./BlogsSection.module.scss";
import HeaderSection from "../HeaderSection/HeaderSection";
import LatestBlog from "../LatestBlog/LatestBlog";
import Blog from "../../data/blog.json";

function BlogsSection(props) {
  return (
    <div className={styles.BlogsSection} id="blogsSection">
      <HeaderSection firstWord="our" secondWord="blogs" />
      <div className={styles.blogs}>
        {Blog.map((item) => (
          <LatestBlog
            url={item.imageUrl}
            id={item.id}
            title={item.title}
            text={item.text.slice(0, 55)}
            addedBy={item.addedBy}
            handleBlog={props.handleBlog}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogsSection;
