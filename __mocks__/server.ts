import { setupWorker } from "msw";
import { db, seedDb } from "./db";

const handlers = [...db.user.toHandlers("rest"), ...db.post.toHandlers("rest")];
const worker = setupWorker(...handlers);

export const setupFakeServ = () => {
  const data = seedDb();
  worker.start();
  return data;
};
