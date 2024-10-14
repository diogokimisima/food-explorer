import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom";
import { App } from "./App"; // Importando o App
import { SignIn } from "./components/sign-in";
import { SignUp } from "./components/sign-up";
import { Home } from "./components/home";
import { NewProduct } from "./components/new-product";
import { ShowProduct } from "./components/show-product";
import { UpdateProduct } from "./components/update-product";

import './global.css'

const isAuthenticated = true;

const routes = isAuthenticated
  ? [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "home", element: <Home /> },
        { path: "new-product", element: <NewProduct /> },
        { path: "show-product", element: <ShowProduct /> },
        { path: "update-product", element: <UpdateProduct /> },
        { path: "*", element: <Navigate to="/home" replace /> }, // Redireciona rotas desconhecidas
      ],
    },
  ]
  : [
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <SignIn />,
    },
  ];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
