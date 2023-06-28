import { setupWorker } from "msw";
import { db, seedDb } from "./db";

export const handlers = [
  ...db.user.toHandlers("rest", "/api"),
  ...db.post.toHandlers("rest", "/api"),
];

export const setupFakeWorker = () => {
  const data = seedDb();
  if (import.meta.env.DEV === true) {
    const worker = setupWorker(...handlers);
    worker.start();
  }
  return data;
};

// export const setupFakeServer = () => setupServer(...handlers);
