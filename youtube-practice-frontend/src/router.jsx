import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./pages/Dashboard";
import GuestLayout from "./components/GuestLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout/>,
    children: [
        {
            path: "/",
            element: <Navigate to="/Users" />,
        },
      {
        path: "/Users",
        element: <Users />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      }
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
