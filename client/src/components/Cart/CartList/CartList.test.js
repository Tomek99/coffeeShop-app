import { render } from "@testing-library/react";
import CartList from "./CartList";

const data = {
  available: true,
  brand: "lavazza",
  createdAt: "2023-02-02T18:36:52.221Z",
  imageUrl:
    "https://res.cloudinary.com/dvoduabha/image/upload/v1679902516/coffee/lavazza/beans/2_CaffeCremaDolce1kg_ovwzh9.png",
  intensity: 5,
  name: "Caffe Crema Dolce, 1 kg",
  oldPrice: 0,
  origin: "Mexico",
  price: "15.50",
  quantity: 2,
  rate: 5,
  type: "coffe beans",
  updatedAt: "2023-02-02T18:36:52.221Z",
  weight: "1 kg",
  __v: 0,
  _id: "63dc02c4c2a0e09b2d62f8e8",
};

test("should render cartlist component", () => {
  const { container } = render(<CartList item={data} />);

  expect(container).toMatchSnapshot();
});
