import React, { useEffect } from "react";
import { ReviewSection } from "../../components/index";

function Reviews() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <ReviewSection />
    </>
  );
}

export default Reviews;
