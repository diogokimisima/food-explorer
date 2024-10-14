import { Home } from "../components/home";
import { NewProduct } from "../components/new-product";
import { ShowProduct } from "../components/show-product";
import { UpdateProduct } from "../components/update-product";

export const authRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/new-product",
      element: <NewProduct />,
    },
    {
      path: "/show-product",
      element: <ShowProduct />,
    },
    {
      path: "/update-product",
      element: <UpdateProduct />,
    },
  ];
  