import { render, screen } from "@testing-library/react";
import RecentPosts from "./RecentPosts";

test("should render component", () => {
  const { container } = render(<RecentPosts />);

  expect(container).toMatchSnapshot();
});
