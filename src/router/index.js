import { createBrowserRouter } from "react-router-dom";
import { Navigasi } from "../components/Navbar.component";
import Surah from "../pages/Surah";

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Surah />,
  },
]);