import { vi } from "vitest";
import { waitFor, screen, getByText } from "@testing-library/react";
import { data } from "../../../__mocks__/server";
import { render } from "../../utils/testUtils";
import PostPage from "./PostsPage";
import { rest } from "msw";
import { server } from "../../../testSetup";
import { fakeNavigate } from "../../../__mocks__/react-router-dom";

const article = data.johnsPosts[0];

vi.mock("react-router-dom");

afterEach(() => {
  vi.clearAllMocks();
  server.resetHandlers();
});

it("Should display post", async () => {
  render(<PostPage />, { route: `/post/${article.id}` });
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
  const { user, debug } = render(<PostPage />, {
    route: `/post/${article.id}`,
  });
  await waitFor(() => {
    expect(screen.getByText(article.title));
  });
  await user.click(screen.getByTestId("BackHome-Button"));
  expect(fakeNavigate).toHaveBeenLastCalledWith("/");
});

it("Should display error message", async () => {
  server.use(
    rest.get(`/api/posts/:postId`, (req, res, ctx) => {
      return res.once(ctx.status(404));
    })
  );

  render(<PostPage />, { route: `/post/${article.id}` });
  await waitFor(() => {
    expect(screen.getByTestId("PostNotFound"));
    expect(
      screen.getByText(`Error while searching for post with id ${article.id}`, {
        exact: false,
      })
    );
    expect(screen.getByText("Reason: Could not find post", { exact: false }));
  });
});
