import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoaderPage } from "../includes/loader/Loader";
import Cart from "../components/Cart/Cart";

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
  () => import("../pages/drinkDetail/DrinkDetailPage")
);
const LazyFoodDetailPage = lazy(
  () => import("../pages/foodDetail/FoodDetailPage")
);
const LazyMerchDetailPage = lazy(
  () => import("../pages/merchDetail/MerchDetailPage")
);
const LazyCoffeeDetailPage = lazy(
  () => import("../pages/coffeeDetail/CoffeeDetailPage")
);
const LazyOtherDrinksDetailPage = lazy(
  () => import("../pages/otherDrinksDetail/OtherDrinksDetailPage")
);
const LazyCombosDetailPage = lazy(
  () => import("../pages/combosDetail/CombosDetailPage")
);

const CreateAccountPage = lazy(
  () => import("../pages/createAccountPage/CreateAccountPage")
);
const LazyCheckoutPage = lazy(() => import("../pages/checkout/CheckoutPage"));
const LazyNotFound = lazy(() => import("../pages/404/404"));

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
    path: "/products",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyProductsPage />
      </Suspense>
    ),
  },
  {
    path: "/drink-detail",
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
    path: "/merch-detail",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyMerchDetailPage />
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
    path: "/other-drinks-detail",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyOtherDrinksDetailPage />
      </Suspense>
    ),
  },
  {
    path: "/combos-detail",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <LazyCombosDetailPage />
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
    path: "/cart",
    element: (
      <Suspense fallback={<LoaderPage />}>
        <Cart />
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
