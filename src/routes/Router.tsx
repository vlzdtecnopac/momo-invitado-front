import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";

const BrowserRoutes = createBrowserRouter([{ path: "/", element: <Login /> }]);
export default BrowserRoutes;
