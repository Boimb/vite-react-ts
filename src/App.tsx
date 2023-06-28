import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
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

const Layout = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar>
      <Toolbar sx={{ a: { textDecoration: "none", color: "unset" } }}>
        <Link to="/">
          <Typography>My FakeBlog</Typography>
        </Link>
      </Toolbar>
    </AppBar>
    <Box mt={8}>
      <Outlet />
    </Box>
  </ThemeProvider>
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
