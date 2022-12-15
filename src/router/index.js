import React from "react";
import { useRoutes } from "react-router-dom";
import { Navigasi } from "../components/Navbar.component";
import { Surah } from "../pages/surah.page";

const GetRouter = () => {
  const routers = [
    {
      path: "/",
      element: <Navigasi />,
      children: [
				{
          index: true,
          element: <Surah />
        },
        {
          path: "Surah",
          element: <Surah />,
					children: [
						{
							path: ":id",
							element: "a"
						}
					]
        },
        {
          path: "Hadits",
          element: "",
        },
        {
          path: "*",
          element: "eror 404",
        },
      ],
    },
  ];
  let konten = useRoutes();
  return <>{konten}</>;
};

export default GetRouter;
