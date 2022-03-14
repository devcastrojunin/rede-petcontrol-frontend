import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home";
import Consultas from "../pages/consultas/Consultas";
import Pets from "../pages/pets/Pets";
import Clientes from "../pages/clientes/Clientes";
import Editar from "../pages/clientes/editar/Editar";
import Novo from "../pages/clientes/novo/Novo";
import Todos from "../pages/clientes/todos/Todos";
import Id from "../pages/clientes/editar/id/Id";


export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path= "home" element= {<Home/>}/>
                <Route path= "consultas" element= {<Consultas/>}/>
                <Route path= "pets" element= {<Pets/>}/>
                <Route path= "clientes" element= {<Clientes/>}>
                    <Route path= "editar" element= {<Editar/>}>
                        <Route path= "id" element= {<Id/>}/>
                    </Route>
                    <Route path= "novo" element= {<Novo/>}/>
                    <Route path= "todos" element= {<Todos/>}/>
                </Route>
                <Route path="*" element={
                <main>
                <p>There's nothing here!</p>
                </main>
                }
                />
                
            </Routes>
        </BrowserRouter>
    )
}