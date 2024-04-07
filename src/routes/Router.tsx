import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoaderPage } from "../includes/loader/Loader";

const LazyLoginPage = lazy(() => import("../pages/login/LoginPage"));
const LazyWelcomePage = lazy(() => import("../pages/welcome/WelcomePage"));
const LazyOrderHerePage = lazy(
  () => import("../pages/orderHere/OrderHerePage")
);
const LazyNoCashPage = lazy(() => import("../pages/noCash/NoCashPage"));
const LazyRegisterPage = lazy(
  () => import("../pages/registerPage/RegisterPage")
);
const LazyLoginClientPage = lazy(
  () => import("../pages/loginClient/LoginClient")
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
const LazyDrinkDetailPage = lazy(
  () => import("../pages/detail/DetailPage")
);
const LazyFoodDetailPage = lazy(
  () => import("../pages/foodDetail/FoodDetailPage")
);
const LazyCoffeeDetailPage = lazy(
  () => import("../pages/coffeeDetail/CoffeeDetailPage")
);
const CreateAccountPage = lazy(
  () => import("../pages/createAccountPage/CreateAccountPage")
);
const LazyCheckoutPage = lazy(() => import("../pages/checkout/CheckoutPage"));
const LazyNotFound = lazy(() => import("../pages/404/404"));
const LazyClientOrderOk = lazy(
  () => import("../pages/clientOrderOk/ClientOrderOk")
);
const LazyGuestOrderOk = lazy(
  () => import("../pages/guestOrderOk/GuestOrderOk")
);
const LazyRegisterSuccess = lazy(
  () => import("../pages/registersuccess/RegisterSuccess")
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
    path: "/login-client",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyLoginClientPage />
      </Suspense>
    ),
  },
  {
    path: "/create-account",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <CreateAccountPage />
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
    path: "/products/:category",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyProductsPage />
      </Suspense>
    ),
  },
  {
    path: "/detail/:product_id",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyDrinkDetailPage />
      </Suspense>
    ),
  },
  {
    path: "/food-detail",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyFoodDetailPage />
      </Suspense>
    ),
  },
  {
    path: "/coffee-detail",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyCoffeeDetailPage />
      </Suspense>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyCheckoutPage />
      </Suspense>
    ),
  },
  {
    path: "/client-order-ok",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyClientOrderOk />
      </Suspense>
    ),
  },
  {
    path: "/guest-order-ok",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyGuestOrderOk />
      </Suspense>
    ),
  },
  {
    path: "/register-success",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyRegisterSuccess />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyNotFound />
      </Suspense>
    ),
  },
]);
export default BrowserRoutes;
