import React from "react";

import { ProductsSection } from "../../components";

function Products(props) {
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
