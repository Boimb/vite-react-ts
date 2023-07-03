import { PropsWithChildren } from "react";
import { render as rtlRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function render(
  ui: React.ReactElement,
  { route = "/", ...renderOptions } = {}
) {
  const user = userEvent.setup();
  const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
    </ThemeProvider>
  );

  return {
    user,
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export { render };
