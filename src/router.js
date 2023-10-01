import { lazy } from "react";

const Main = lazy(() => import("./pages/Main"));
const Classes = lazy(() => import("./pages/Classes"));

export const routes = [
  {
    path: "/main",
    element: Main,
  },
  {
    path: "/classes",
    element: Classes,
  },
];
