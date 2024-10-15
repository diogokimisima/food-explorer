// main.tsx ou index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { App } from "./App"; // Importando o App
import { SignIn } from "./components/sign-in";
import { SignUp } from "./components/sign-up";
import { Home } from "./components/home";
import { NewProduct } from "./components/new-product";
import { ShowProduct } from "./components/show-product";
import { UpdateProduct } from "./components/update-product";
import './global.css';

const isAuthenticated = true;

const routes = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: isAuthenticated
      ? [
          { path: "/", element: <Home /> },
          { path: "new-product", element: <NewProduct /> },
          { path: "show-product", element: <ShowProduct /> },
          { path: "update-product", element: <UpdateProduct /> },
          { path: "*", element: <Navigate to="/" replace /> },
        ]
      : [
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
