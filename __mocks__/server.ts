import { setupWorker } from "msw";
import { db, seedDb } from "./db";

export const handlers = [
  ...db.user.toHandlers("rest", "/api"),
  ...db.post.toHandlers("rest", "/api"),
];
export const data = seedDb();

export const setupFakeWorker = () => {
  if (import.meta.env.DEV === true) {
    const worker = setupWorker(...handlers);
    worker.start();
  }
};

// export const setupFakeServer = () => setupServer(...handlers);
