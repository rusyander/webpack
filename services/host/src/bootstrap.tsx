import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";

const root = document.getElementById("root") as HTMLElement;

if (!root) throw new Error("Root element not found");

const container = createRoot(root);

container.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
