import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { setupFakeWorker } from "../__mocks__/server.ts";

setupFakeWorker();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
