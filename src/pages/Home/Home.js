import React from "react";
import {
  HeaderSection,
  HomeSection,
  AboutSection,
  MenuSection,
  ProductsSection,
  ReviewSection,
  ContactSection,
  BlogsSection,
  FooterSection,
} from "../../components/index";

function Home(props) {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <MenuSection addItem={props.addItem} />
      <ProductsSection addItem={props.addItem} />
      <ReviewSection />
      <BlogsSection />
    </>
  );
}

export default Home;
