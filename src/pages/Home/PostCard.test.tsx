import { screen, waitFor } from "@testing-library/react";

import { render } from "../../utils/testUtils";
import PostCard from "./PostCard";
import { Post } from "../../types";
import { fakeNavigate } from "../../../__mocks__/react-router-dom";
import { data } from "../../../__mocks__/server";

vi.mock("react-router-dom");
afterEach(() => {
  vi.resetAllMocks();
});

const fakePost = data.johnsPosts[0] as Post;

it("Should render PostCard", async () => {
  render(<PostCard post={fakePost} />);
  expect(screen.getByText(fakePost.title));
  expect(screen.getByText(fakePost.content));
  expect(
    screen.getByText(
      `By: ${fakePost.author?.firstName} ${fakePost.author?.lastName}`
    )
  );
});

it("Should navigate to article page", async () => {
  const { user } = render(<PostCard post={fakePost} />);
  await waitFor(() => {
    expect(screen.getByText(fakePost.title));
  });

  await user.click(screen.getByTestId("PostCard"));
  expect(fakeNavigate).toHaveBeenLastCalledWith(`/posts/${fakePost.id}`);
});
