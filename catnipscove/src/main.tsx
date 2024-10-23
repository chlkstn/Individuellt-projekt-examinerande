import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as React from "react";
import * as ReactDOM from "react-dom/client";

// Importing context

import { CatProvider } from "./CatContext.tsx";
import { VisitorProvider } from "./VisitorContext.tsx";
import { useAuth, AuthProvider } from "./AuthContext";

// importing the routes

import Root from "./routes/Root.tsx";
import Error from "./routes/Error.tsx";

import { Home } from "./routes/Home.tsx";
import Gallery from "./routes/Gallery.tsx";
import Add from "./routes/Add.tsx";
import Login from "./routes/Login.tsx";
import Manage from "./routes/Manage.tsx";
import Details from "./components/Details.tsx";
import VisitorDetails from "./components/VisitorDetails.tsx";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./style.css";
import "./reset.css";
import "./navbar.css";
import "./home.css";
import EditForm from "./components/EditForm.tsx";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
        index: true,
      },

      {
        path: "home",
        element: <Home />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "gallery/:catId",
        element: <Details />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "add",

        element: (
          <ProtectedRoute>
            <Add />
          </ProtectedRoute>
        ),
      },

      {
        path: "manage",
        element: (
          <ProtectedRoute>
            <Manage />
          </ProtectedRoute>
        ),
      },
      {
        path: "manage/edit/:id",
        element: <EditForm />,
      },
      {
        path: "/manage/visitordetails/:catId",
        element: <VisitorDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CatProvider>
      <AuthProvider>
        <VisitorProvider>
          <RouterProvider router={router} />
        </VisitorProvider>
      </AuthProvider>
    </CatProvider>
  </React.StrictMode>
);
