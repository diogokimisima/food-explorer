import { SignIn } from "../components/sign-in";
import { SignUp } from "../components/sign-up";


export const publicRoutes = [
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <SignIn />,
    },
  ];
  