import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/home";
import Consultas from "./routes/consultas";
import Pets from "./routes/pets";
import Clientes from "./routes/clientes";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path= "/" element= {<App/>}>
        <Route path= "home" element= {<Home/>}/>
        <Route path= "consultas" element= {<Consultas/>}/>
        <Route path= "pets" element= {<Pets/>}/>
        <Route path= "clientes" element= {<Clientes/>}/>
        <Route path="*" element={
        <main>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

