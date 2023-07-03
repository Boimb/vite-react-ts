import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./pages/Home/HomePage";
import PostPage from "./pages/Posts/PostsPage";
import {
  AppBar,
  Box,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { theme } from "./utils/theme";
import { store } from "./store";

const Layout = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
        <Toolbar sx={{ a: { textDecoration: "none", color: "unset" } }}>
          <Link to="/">
            <Typography>My FakeBlog</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box mt={11} px={3}>
        <Outlet />
      </Box>
    </ThemeProvider>
  </Provider>
);

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:postId" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
