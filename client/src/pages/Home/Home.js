import React from "react";
import {
  HomeSection,
  AboutSection,
  ProductsSection,
  ReviewSection,
  BlogsSection,
  ShipmentSection,
  CareComponent,
  HistorySection,
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
      <HistorySection />
    </>
  );
}

export default Home;
