// main.tsx ou index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { App } from "./App";
import { SignIn } from "./components/sign-in";
import { SignUp } from "./components/sign-up";
import { Home } from "./components/home";
import { NewProduct } from "./components/new-product";
import { ShowProduct } from "./components/show-product";
import { UpdateProduct } from "./components/update-product";
import './global.css';
import { Order } from "./components/order";
import { Favorites } from "./components/favorites";
import { isAdmin } from "./config/auth-config";

const isAuthenticated = true;

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: isAuthenticated
      ? [
        // Rotas restritas apenas para admin
        ...(isAdmin
          ? [
            { path: "new-product", element: <NewProduct /> },
            { path: "update-product", element: <UpdateProduct /> },
          ]
        // Rotas restritas apenas para clientes
          : [
            { path: "order", element: <Order /> },
            { path: "favorites", element: <Favorites /> },
          ]),

        // Rotas disponíveis para usuários autenticados
        { path: "/", element: <Home /> },
        { path: "show-product", element: <ShowProduct /> },
        { path: "*", element: <Navigate to="/" replace /> },
      ]
      : [
        // Rotas públicas para usuários não autenticados
        { path: "signup", element: <SignUp /> },
        { path: "*", element: <SignIn /> },
      ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
