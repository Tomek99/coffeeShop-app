import React from "react";
import {
  HomeSection,
  AboutSection,
  ProductsSection,
  ReviewSection,
  BlogsSection,
  ShipmentSection,
  CareComponent,
  ViewedProductsSection,
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
      <ViewedProductsSection />
    </>
  );
}

export default Home;
