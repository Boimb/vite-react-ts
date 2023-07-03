import { PropsWithChildren } from "react";
import { render as rtlRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Provider } from "react-redux";
import { store } from "../store";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

function render(
  ui: React.ReactElement,
  { route = "/", ...renderOptions } = {}
) {
  setupListeners(store.dispatch);
  const user = userEvent.setup();
  const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </ThemeProvider>
    </Provider>
  );

  return {
    user,
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export { render };
