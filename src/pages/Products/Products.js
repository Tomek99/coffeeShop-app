import React from "react";
import { ProductsSection } from "../../components";

function AllProducts(props) {
  return (
    <>
      <ProductsSection addItem={props.addItem} isTrue={false} />
    </>
  );
}

export default AllProducts;
