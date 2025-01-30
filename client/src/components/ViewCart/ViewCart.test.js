import { getByRole, render, screen } from "@testing-library/react";
import ViewCart from "./ViewCart";
import user from "@testing-library/user-event";
import { Context } from "../../Contexts/Context";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

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

jest.mock("./FillCart/CartSummary/CartSummary", () => {
  return () => {
    return <div>test</div>;
  };
});

const renderComponent = (cartItems) => {
  return render(
    <Context.Provider value={{ cartItems }}>
      <MemoryRouter>
        <ViewCart />
      </MemoryRouter>
    </Context.Provider>
  );
};

describe("render components", () => {
  test("should render EmptyCart", () => {
    const { container } = renderComponent(items1);

    const div = screen.getByText("Your cart is empty");
    expect(div).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("should render one item", () => {
    const { container } = renderComponent(items2);

    const div = screen.getByText("Lavazza Tierra Bio-Organic for Africa");
    expect(div).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
