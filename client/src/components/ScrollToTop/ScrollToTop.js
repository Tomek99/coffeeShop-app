import { useEffect } from "react";

const ScrollToTop = ({ pageNumber }) => {
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pageNumber]);
};

export default ScrollToTop;
