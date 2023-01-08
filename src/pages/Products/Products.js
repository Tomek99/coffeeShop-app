import React, { useEffect } from "react";

import { ProductsSection } from "../../components";

function Products(props) {
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
        productData={props.productData}
      />
    </>
  );
}

export default Products;
