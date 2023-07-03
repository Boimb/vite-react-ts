import { vi } from "vitest";
import { waitFor, screen, getByText } from "@testing-library/react";
import { data } from "../../../__mocks__/server";
import { render } from "../../utils/testUtils";
import PostPage from "./PostsPage";
import { server } from "../../../testSetup";
import {
  fakeNavigate,
  fakeUseParams,
} from "../../../__mocks__/react-router-dom";
import { api } from "../../api/api";

const article = data.johnsPosts[0];

vi.mock("react-router-dom");

afterEach(() => {
  vi.clearAllMocks();
  server.resetHandlers();
});

it("Should display post", async () => {
  render(<PostPage />, { route: `/posts/${article.id}` });
  await waitFor(() => {
    expect(screen.getByText(article.title));
    expect(
      screen.getByText(
        `By: ${article.author?.firstName} ${article.author?.lastName}`
      )
    );
    expect(screen.getByText(article.content));
  });
});

it("Should redirect to Home", async () => {
  const { user } = render(<PostPage />, {
    route: `/post/${article.id}`,
  });
  await waitFor(() => {
    expect(screen.getByText(article.title));
  });
  await user.click(screen.getByTestId("BackHome-Button"));
  expect(fakeNavigate).toHaveBeenLastCalledWith("/");
});

it("Should display error message", async () => {
  const unknownId = "123456";
  fakeUseParams.mockReturnValue({
    postId: unknownId,
  });

  render(<PostPage />, { route: `/posts/${unknownId}` });
  await waitFor(() => {
    expect(screen.getByTestId("PostNotFound"));
    expect(
      screen.getByText(`Error while searching for post with id ${unknownId}`, {
        exact: false,
      })
    );
  });
});
