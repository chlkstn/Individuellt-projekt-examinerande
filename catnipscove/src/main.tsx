import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { CatProvider } from "./CatContext.tsx";

import Root from "./routes/Root.tsx";
import Error from "./routes/Error.tsx";
import Info from "./routes/Info.tsx";
import { Home } from "./routes/Home.tsx";
import Gallery from "./routes/Gallery.tsx";
import Add from "./routes/Add.tsx";
import { Login } from "./routes/Login.tsx";
import Manage from "./routes/Manage.tsx";
import Details from "./components/Details.tsx";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import "./reset.css";
import EditForm from "./components/EditForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "gallery",
        element: (
          
            <Gallery />
          
        ),
      },
      {
        path: "gallery",
        element: <Details />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "info",
        element: <Info />,
      },
      {
        path: "add",

        element: <Add />,
      },
      {
        path: "manage",
        element: <Manage />,
      },
      {
        path: "manage/edit/:id",
        element: <EditForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CatProvider>
      
      {/* Wrap the entire router in CatProvider */}
      <RouterProvider router={router} />
    </CatProvider>
  </React.StrictMode>
);
