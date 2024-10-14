import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Conteúdo dinâmico das rotas será renderizado aqui */}
      </main>
      <Footer />
    </div>
  );
}
