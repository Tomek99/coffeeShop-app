import { useEffect, useState } from "react";

const useCartHook = (notify) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedValue = localStorage.getItem("cart");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return [];
  });
  const [cartValue, setCartValue] = useState(() => {
    const storedValue = localStorage.getItem("cart-value");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return 0;
  });
  const [cartSave, setCartSave] = useState(() => {
    const storedValue = localStorage.getItem("cart-save");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return 0;
  });

  const [cartQuantity, setCartQuantity] = useState(() => {
    const storedValue = localStorage.getItem("cart-quantity");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return 0;
  });

  useEffect(() => {
    localStorage.setItem("cart-save", cartSave);
    localStorage.setItem("cart-value", cartValue);
    localStorage.setItem("cart-quantity", cartQuantity);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartValue, cartQuantity, cartItems, cartSave]);

  function addItem(item, event) {
    const cartItemsCopy = cartItems.map((item) => ({ ...item }));
    const newItemIndex = cartItemsCopy.findIndex(
      (element) => element._id === item._id
    );

    if (newItemIndex === -1) {
      setCartItems([...cartItemsCopy, { ...item }]);
    } else {
      cartItemsCopy[newItemIndex].quantity =
        ~~cartItemsCopy[newItemIndex].quantity + ~~item.quantity;

      setCartItems(cartItemsCopy);
    }

    notify("Product(s) added to cart!");
    setCartQuantity(cartQuantity + ~~item.quantity);
    appendPrice(item.price, item.oldPrice, ~~item.quantity);
  }

  function deleteItem(id, newPrice, oldPrice) {
    const cartList = cartItems.filter((item) => item._id !== id);
    const findItem = cartItems.filter((item) => item._id === id);

    setCartItems(cartList);
    setCartQuantity(cartQuantity - ~~findItem[0].quantity);
    subtractPrice(newPrice, oldPrice, ~~findItem[0].quantity);
    notify("Product(s) has been removed!");
  }

  function appendPrice(newPrice, oldPrice, quantity) {
    setCartValue(
      Math.round((cartValue + parseFloat(newPrice) * ~~quantity) * 100) / 100
    );

    if (oldPrice) {
      setCartSave(
        Math.round(
          (cartSave +
            (parseFloat(oldPrice) - parseFloat(newPrice)) * ~~quantity) *
            100
        ) / 100
      );
    }
  }

  function subtractPrice(newPrice, oldPrice, quantity) {
    setCartValue(
      Math.round((cartValue - parseFloat(newPrice) * ~~quantity) * 100) / 100
    );

    if (oldPrice) {
      setCartSave(
        Math.round(
          (cartSave -
            (parseFloat(oldPrice) - parseFloat(newPrice)) * ~~quantity) *
            100
        ) / 100
      );
    }
  }

  function changeQuantity(e, id) {
    const cartItemsCopy = cartItems.map((item) => ({ ...item }));
    const foundIndex = cartItemsCopy.findIndex(
      (item, index) => item._id === id
    );
    const previousQuantity = ~~cartItemsCopy[foundIndex].quantity;
    cartItemsCopy[foundIndex].quantity = parseInt(e.target.value);

    const currentQuantity = ~~cartItemsCopy[foundIndex].quantity;
    setCartItems(cartItemsCopy);
    setCartQuantity(cartQuantity + currentQuantity - previousQuantity);

    if (currentQuantity > previousQuantity) {
      appendPrice(
        cartItemsCopy[foundIndex].price,
        cartItemsCopy[foundIndex].oldPrice,
        Math.abs(currentQuantity - previousQuantity)
      );
    } else if (currentQuantity < previousQuantity) {
      subtractPrice(
        cartItemsCopy[foundIndex].price,
        cartItemsCopy[foundIndex].oldPrice,
        Math.abs(currentQuantity - previousQuantity)
      );
    }
  }

  function clearTheCart() {
    setCartItems([]);
    setCartQuantity(0);
    setCartValue(0);
    setCartSave(0);

    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("cart-quantity", 0);
    localStorage.setItem("cart-value", 0);
    localStorage.setItem("cart-save", 0);

    if (window.location.href !== `${process.env.REACT_APP_URI}/order/success`)
      notify("Cart has been cleared!");
  }

  return {
    cartItems,
    cartValue,
    cartSave,
    cartQuantity,
    addItem,
    deleteItem,
    changeQuantity,
    clearTheCart,
  };
};

export default useCartHook;
