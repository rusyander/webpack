import { App } from "@/components/App";
import { About } from "@/pages/About";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const loading = <h1>Loading....</h1>;

const routes = [
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "/admin/about",
        element: (
          <Suspense fallback={loading}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
export default routes;
