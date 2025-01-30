import { render, screen } from "@testing-library/react";
import CustomerReview from "./CustomerReview";

const item = {
  id: "31232",
  imageUrl: "",
  text: " test test test",
  avatarUrl: "",
  name: "productName",
  rate: 5,
};
test("should render CustomerReview", () => {
  const { container } = render(<CustomerReview item={item} />);

  expect(container).toMatchSnapshot();
});
