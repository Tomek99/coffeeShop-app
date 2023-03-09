import React, { useEffect } from "react";
import { BlogsSection } from "../../components";
function Articles() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <BlogsSection isTrue={false} />
    </>
  );
}

export default Articles;
