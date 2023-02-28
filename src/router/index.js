import { createBrowserRouter } from "react-router-dom";
import { Navigasi } from "../components/Navbar.component";

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Navigasi />,
  },
]);