import { render, screen } from "@testing-library/react";
import App from "./App";

it("Shoudl render App", () => {
  render(<App />);
  const title = screen.getByText("My fake blog");
  expect(title).toBeInTheDocument();
});
