import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
