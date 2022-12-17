import React from "react";
import {
  HomeSection,
  AboutSection,
  MenuSection,
  ProductsSection,
  ReviewSection,
  BlogsSection,
} from "../../components/index";

function Home(props) {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <MenuSection addItem={props.addItem} isTrue={true} />
      <ProductsSection addItem={props.addItem} isTrue={true} />
      <ReviewSection />
      <BlogsSection />
    </>
  );
}

export default Home;
