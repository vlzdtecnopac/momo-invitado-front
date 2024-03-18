import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.tsx";
import { LoaderPage } from "./includes/loader/Loader";
import { SocketProvider } from "./context/SocketContext";
import { Langi18nProvider } from "./context/Langi18nContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Langi18nProvider>
    <SocketProvider>
      <React.Suspense fallback={<LoaderPage />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </SocketProvider>
    </Langi18nProvider>
  </React.StrictMode>
);
