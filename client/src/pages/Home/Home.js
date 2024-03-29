import React from "react";
import {
  HomeSection,
  AboutSection,
  ProductsSection,
  ReviewSection,
  BlogsSection,
  ShipmentSection,
  CareComponent,
} from "../../components/index";

function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProductsSection />
      <ShipmentSection />
      <ReviewSection />
      <CareComponent />
      <BlogsSection />
    </>
  );
}

export default Home;
