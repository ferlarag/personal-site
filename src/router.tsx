import { createBrowserRouter, Outlet } from "react-router";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="w-full relative bg-white border md:my-10 border-zinc-200 max-w-[900px] mx-auto">
        <NavBar />
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
