import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoaderPage } from "../includes/loader/Loader";
import HotOrColdPage from "../pages/hotOrCold/HotOrColdPage";
import ProductsPage from "../pages/products/ProductsPage";

const LazyLoginPage = lazy(() => import("../pages/login/LoginPage"));
const LazyWelcomePage = lazy(() => import("../pages/welcome/WelcomePage"));
const LazyOrderHerePage = lazy(
  () => import("../pages/orderHere/OrderHerePage")
);
const LazyNoCashPage = lazy(() => import("../pages/noCash/NoCashPage"));
const LazyRegisterPage = lazy(
  () => import("../pages/registerPage/RegisterPage")
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
  {
    path: "/no-cash",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyNoCashPage />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyRegisterPage />
      </Suspense>
    ),
  },
  {
    path: "/hot-or-cold",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <HotOrColdPage />
      </Suspense>
    ),
  },
  {
    path: "/products",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <ProductsPage />
      </Suspense>
    ),
  },
]);
export default BrowserRoutes;
