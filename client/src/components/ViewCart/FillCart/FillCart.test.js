import { getByRole, render, screen } from "@testing-library/react";
import FillCart from "./FillCart";
import user from "@testing-library/user-event";

import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Context } from "../../../Contexts/Context";

const items1 = [];
const items2 = [
  {
    available: "true",
    brand: "lavazza",
    createdAt: "2023-02-03T11:11:55.634Z",
    imageUrl:
      "https://res.cloudinary.com/dvoduabha/image/upload/v1679902516/coffee/lavazza/ground/4_LavazzaTierraBioOrganicforAfrica_qvc2in.png",
    intensity: "7",
    name: "Lavazza Tierra Bio-Organic for Africa",
    oldPrice: "8.00",
    origin: "Ethiopia ",
    price: "7.00",
    productRatings: [5],
    quantity: "1",
    type: "ground coffee",
    updatedAt: "2024-03-13T09:17:24.519Z",
    weight: "250 g",
    __v: 0,
    _id: "63dcebfb954a9e16291723c8",
  },
];

jest.mock("./CartSummary/CartSummary", () => {
  return () => {
    return <div>Cart Summary componnent</div>;
  };
});

// cartQuantity
// deleteItem
// clearTheCart
// changeQuantity

const renderComponent = (
  cartItems,
  cartQuantity,
  deleteItem,
  clearTheCart,
  changeQuantity
) => {
  return render(
    <Context.Provider
      value={{
        cartItems,
        cartQuantity,
        deleteItem,
        clearTheCart,
        changeQuantity,
      }}
    >
      <MemoryRouter>
        <FillCart />
      </MemoryRouter>
    </Context.Provider>
  );
};

test("Should render FillCart component", () => {
  const cartQuantity = 2;
  const deleteItem = jest.fn();
  const clearTheCart = jest.fn();
  const changeQuantity = jest.fn();

  const { container } = renderComponent(
    items2,
    cartQuantity,
    deleteItem,
    clearTheCart,
    changeQuantity
  );

  expect(container).toMatchSnapshot();
});

describe("user interactions", () => {
  const cartQuantity = 2;
  const deleteItem = jest.fn();
  const clearTheCart = jest.fn();
  const changeQuantity = jest.fn();

  test("user delete product", () => {
    renderComponent(
      items2,
      cartQuantity,
      deleteItem,
      clearTheCart,
      changeQuantity
    );

    const btn = screen.getAllByRole("button");
    user.click(btn[1]);

    expect(deleteItem).toHaveBeenCalled();
  });

  test("user clear the cart", () => {
    renderComponent(
      items2,
      cartQuantity,
      deleteItem,
      clearTheCart,
      changeQuantity
    );

    const btn = screen.getByRole("button", { name: /Clear the cart/i });
    user.click(btn);

    expect(clearTheCart).toHaveBeenCalled();
  });
});
