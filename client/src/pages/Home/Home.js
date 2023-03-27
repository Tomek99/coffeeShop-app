import React, { useEffect } from "react";
import {
  HomeSection,
  AboutSection,
  ProductsSection,
  ReviewSection,
  BlogsSection,
  ShipmentSection,
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
      <ProductsSection />
      <ShipmentSection />
      <ReviewSection isTrue={true} />
      <BlogsSection isTrue={true} />
    </>
  );
}

export default Home;
