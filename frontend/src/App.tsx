// import { SignUp } from "./components/sign-up";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
// import { UpdateProduct } from "./components/update-product";
// import { NewProduct } from "./components/new-product";
import { ShowProduct } from "./components/show-product";
// import { Home } from "./components/home";
// import { SignIn } from "./components/sign-in";
// import { SignUp } from "./components/sign-up";


export function App() {
  return (
    <div>
      <Header />

      <ShowProduct />
      {/* <UpdateProduct/> */}
      {/* <SignUp /> */}
      {/* <SignIn/> */}
      {/* <Home /> */}
      {/* <NewProduct /> */}
      <Footer />
    </div>
  )
}