import React, { useEffect } from "react";
import { ProductsSection } from "../../components";

function Products() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <ProductsSection
        isTrue={false}
        isHome={false}
        firstWord="Our"
      ></ProductsSection>
    </>
  );
}

export default Products;
