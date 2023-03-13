import React, { useEffect } from "react";
import {
  HomeSection,
  AboutSection,
  MenuSection,
  ProductsSection,
  ReviewSection,
  BlogsSection,
} from "../../components/index";

function Home(props) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProductsSection isTrue={true} isHome={true} firstWord="Latest" />
      <ReviewSection isTrue={true} />
      <BlogsSection isTrue={true} />
    </>
  );
}

export default Home;
