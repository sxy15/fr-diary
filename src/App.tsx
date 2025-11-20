import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { ScrollToTop } from './components/ScrollToTop';
import { Articles } from './pages/Articles';
import { ArticleDetail } from './pages/ArticleDetail';
import { Projects } from './pages/Projects';

// 创建一个包装组件，将ScrollToTop放在路由上下文中
const Root = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="/articles" replace />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/article/:slug",
        element: <ArticleDetail />,
      },
      {
        path: "*",
        element: <Navigate to="/articles" replace />,
      },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
