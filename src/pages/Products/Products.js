import React from "react";
import { ProductsSection } from "../../components";

function Products(props) {
  return (
    <>
      <ProductsSection addItem={props.addItem} isTrue={false} isHome={false} />
    </>
  );
}

export default Products;
