import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

it("Shoudl render App", () => {
  render(<App />);
  const title = screen.getByText("My fake blog");
  expect(title).toBeInTheDocument();
});

it("Should display 3 articles", async () => {
  render(<App />);
  await waitFor(() => {
    const articles = screen.getAllByTestId("PostCard");
    expect(articles.length).toBe(3);
  });
});
