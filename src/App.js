import { BrowserRouter } from "react-router-dom";
import Header from "./pages/header/Header";
import Routers from "./routes/Routes";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers/>
    </BrowserRouter>
  );
}

 
