import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { StrictMode, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./pages/About";
import { Shop } from "./pages/Shop";

const root = document.getElementById("root") as HTMLElement;

if (!root) throw new Error("Root element not found");

const container = createRoot(root);

const loading = <h1>Loading....</h1>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={loading}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={loading}>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
