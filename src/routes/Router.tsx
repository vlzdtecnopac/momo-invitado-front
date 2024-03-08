import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoaderPage } from "../includes/loader/Loader";

const LazyLoginPage = lazy(() => import("../pages/login/LoginPage"));
const LazyWelcomePage = lazy(() => import("../pages/welcome/WelcomePage"));
const LazyOrderHerePage = lazy(
  () => import("../pages/orderHere/OrderHerePage")
);

const BrowserRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyLoginPage />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyLoginPage />
      </Suspense>
    ),
  },
  {
    path: "/welcome",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyWelcomePage />
      </Suspense>
    ),
  },
  {
    path: "/order-here",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyOrderHerePage />
      </Suspense>
    ),
  },
]);
export default BrowserRoutes;
