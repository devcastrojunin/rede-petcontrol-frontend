import { render } from "react-dom";
import App from "./App";
import Routers from "./routes/Routes";




const rootElement = document.getElementById("root");
render(
  <div>
    <App/>
    <Routers/>
  </div>
  ,
  rootElement
);

