import { useState } from "react";

const useWishListHook = (notify) => {
  const [wishList, setWishList] = useState(() => {
    const storedValue = localStorage.getItem("wishList");

    if (storedValue !== null) return JSON.parse(storedValue);
    else return [];
  });

  function addWishItem(id) {
    const foundId = wishList.find((value) => value === id);

    if (!foundId) {
      setWishList([...wishList, id]);
      localStorage.setItem("wishList", JSON.stringify([...wishList, id]));

      notify("Product added to wish list!");
    } else {
      const filteredItems = wishList.filter((value) => value !== id);
      setWishList(filteredItems);
      localStorage.setItem("wishList", JSON.stringify(filteredItems));

      notify("Product has been deleted!");
    }
  }

  return { addWishItem, wishList };
};

export default useWishListHook;
