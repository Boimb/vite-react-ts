import { screen, waitFor } from "@testing-library/react";
import { render } from "../../utils/testUtils";
import HomePage from "./HomePage";

it("Should render HomePage", () => {
  render(<HomePage />);
  const container = screen.getByTestId("HomePage");
  expect(container).toBeInTheDocument();
});

it("Should display 3 articles", async () => {
  render(<HomePage />);
  await waitFor(() => {
    const articles = screen.getAllByTestId("PostCard");
    expect(articles.length).toBe(3);
  });
});
