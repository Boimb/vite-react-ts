import { vi } from "vitest";
import { data } from "./server";

export * from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const fakeNavigate = vi.fn(() => {});

export const fakeUseParams = vi.fn(() => {
  return {
    postId: data.johnsPosts[0].id,
  };
});

export const useParams = fakeUseParams;

export const useNavigate = () => fakeNavigate;
