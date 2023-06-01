import { render, screen } from "@testing-library/react";
import LatestBlog from "./LatestBlog";

test("should render LatestBlog component", () => {
  const item = {
    title: "Lorem ipsum",
    text: " Lorem ipsum lorem ipsum",
    addedBy: "Tomek S",
    imageUrl: "images/blog-1.jpeg",
  };

  const { container } = render(<LatestBlog item={item} />);

  expect(container).toMatchSnapshot();
});
