import { useEffect, useState } from "react";

function useViewedProductsHook() {
  const [viewedProducts, setViewedProducts] = useState(() => {
    const storedValue = localStorage.getItem("user-history");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return [];
  });

  function saveViewedProduct(item) {
    const exist = viewedProducts.find((object) => {
      return object.productId === item.productId;
    });

    if (!exist) {
      setViewedProducts((viewedProducts) => [...viewedProducts, item]);
    }
  }

  useEffect(() => {
    localStorage.setItem("user-history", JSON.stringify(viewedProducts));
  }, [viewedProducts]);
  return { viewedProducts, saveViewedProduct };
}

export default useViewedProductsHook;
