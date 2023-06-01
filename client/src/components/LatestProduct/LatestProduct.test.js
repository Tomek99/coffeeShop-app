import { render, screen } from "@testing-library/react";
import LatestProduct from "./LatestProduct";
import { Context } from "../../Contexts/Context";
import { MemoryRouter } from "react-router-dom";

test("should render LatestProduct component", () => {
  const item = {
    _id: "3gijh3g0h23",
    imageUrl: "",
    name: "test",
    price: 13.5,
    oldPrice: null,
    rate: 4,
    intensity: 7,
  };

  const wishList = [];
  const { container } = render(
    <Context.Provider value={{ wishList }}>
      <MemoryRouter>
        <LatestProduct item={item} />
      </MemoryRouter>
    </Context.Provider>
  );

  expect(container).toMatchSnapshot();
});
