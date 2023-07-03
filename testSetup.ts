import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import "whatwg-fetch";
import { setupServer } from "msw/node";
import { handlers } from "./__mocks__/server";
// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

export const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
