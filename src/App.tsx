import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import PostPage from "./pages/Posts/PostsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "posts/:postId",
    element: <PostPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
