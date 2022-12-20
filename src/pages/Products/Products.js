import React from "react";
import { ProductsSection } from "../../components";

function Products(props) {
  return (
    <>
      <ProductsSection addItem={props.addItem} isTrue={false} />
    </>
  );
}

export default Products;
