import { createBrowserRouter } from "react-router-dom";
import { Navigasi } from "../components/Navbar.component";
import ErrorPage from "../pages/ErrorPage";
import Surah from "../pages/Surah";

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Surah />,
    errorElement: <ErrorPage />,
  },
]);