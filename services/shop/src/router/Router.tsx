import { App } from "@/components/App";
import { Shop } from "@/pages/Shop";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const loading = <h1>Loading....</h1>;

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: "/shop/main",
        element: (
          <Suspense fallback={loading}>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
export default routes;
