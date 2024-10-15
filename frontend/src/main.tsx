// main.tsx ou index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { App } from "./App";
import { SignIn } from "./components/sign-in";
import { SignUp } from "./components/sign-up";
import { Home } from "./components/home";
import { NewProduct } from "./components/new-product";
import { ShowProduct } from "./components/show-product";
import { UpdateProduct } from "./components/update-product";
import { Order } from "./components/order";
import './global.css';

const isAuthenticated = true;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          {isAuthenticated ? (
            <>
              <Route index element={<Home />} />
              <Route path="new-product" element={<NewProduct />} />
              <Route path="show-product" element={<ShowProduct />} />
              <Route path="update-product" element={<UpdateProduct />} />
              <Route path="order" element={<Order />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          ) : (
            <>
              <Route path="signup" element={<SignUp />} />
              <Route path="*" element={<SignIn />} />
            </>
          )}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
