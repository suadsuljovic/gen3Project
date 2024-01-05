import { useSelector } from "react-redux";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ArticlePage from "./pages/ArticlePage";
import GroupsPage from "./pages/GroupsPage";
import MyLayout from "./components/Layout";
import { paths } from "./utils";
import { ConfigProvider } from "antd";

const router = createBrowserRouter([
  {
    path: paths.landing,
    element: (
      <MyLayout>
        <Outlet />
      </MyLayout>
    ),
    children: [
      { index: true, element: <LandingPage /> },
      { path: paths.article, element: <ArticlePage /> },
      { path: paths.group, element: <GroupsPage /> },
    ],
  },
]);

function App() {
  const blogsState = useSelector((state) => state.blogs);

  return (
    <>
      <ConfigProvider
        theme={{
          token: {},
          components: {},
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;
