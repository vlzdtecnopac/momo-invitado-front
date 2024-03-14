import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoaderPage } from "../includes/loader/Loader";
import ComplemetCard from "../components/ComplementCard/ComplemetCard";

const LazyLoginPage = lazy(() => import("../pages/login/LoginPage"));
const LazyWelcomePage = lazy(() => import("../pages/welcome/WelcomePage"));
const LazyOrderHerePage = lazy(
  () => import("../pages/orderHere/OrderHerePage")
);
const LazyNoCashPage = lazy(() => import("../pages/noCash/NoCashPage"));
const LazyRegisterPage = lazy(
  () => import("../pages/registerPage/RegisterPage")
);
const LazyHotOrColdPage = lazy(
  () => import("../pages/hotOrCold/HotOrColdPage")
);

const LazyMerchOrCoffeePage = lazy(
  () => import("../pages/merchOrCoffee/MerchOrCoffeePage")
);

const LazySweetSaltySnacksPage = lazy(
  () => import("../pages/sweetSaltySnacks/SweetSaltySnacksPage")
);
const LazyProductCategoryPage = lazy(
  () => import("../pages/productCategories/ProductCategoryPage")
);

const LazyProductsPage = lazy(
  () => import("../pages/productsPage/ProductsPage")
);
const LazyProductDetailPage = lazy(
  () => import("../pages/productDetail/ProductDetailPage")
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
        <LazyHotOrColdPage />
      </Suspense>
    ),
  },
  {
    path: "/merch-or-coffee",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyMerchOrCoffeePage />
      </Suspense>
    ),
  },
  {
    path: "/sweet-salty-snacks",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazySweetSaltySnacksPage />
      </Suspense>
    ),
  },
  {
    path: "/categories",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyProductCategoryPage />
      </Suspense>
    ),
  },
  {
    path: "/products",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyProductsPage />
      </Suspense>
    ),
  },
  {
    path: "/product-detail",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyProductDetailPage />
      </Suspense>
    ),
  },
  {
    path: "/comp-card",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <ComplemetCard />
      </Suspense>
    ),
  },
]);
export default BrowserRoutes;
