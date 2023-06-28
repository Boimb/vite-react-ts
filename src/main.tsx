import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { setupFakeServ } from "../__mocks__/server.ts";

export const serverData = setupFakeServ();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
