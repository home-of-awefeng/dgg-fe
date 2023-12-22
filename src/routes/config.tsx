import type { RouteProps } from "@/types/routes";
import Welcome from "@/views/welcome";
import { Navigate, Outlet } from "react-router-dom";
import NotFound from "@/views/404";
const routes: RouteProps[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <Navigate replace to="/welcome" /> },
      {
        path: "welcome",
        element: <Welcome />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
