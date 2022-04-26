import { Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home";
import Editar from "../pages/clientes/editar/Editar";
import Novo from "../pages/clientes/novo/Novo";
import Todos from "../pages/clientes/todos/Todos";
import Id from "../pages/clientes/editar/id/Id";
import EditarPets from "../pages/pets/editar/Editar";
import NovoPets from "../pages/pets/novo/Novo";
import TodosPets from "../pages/pets/todos/Todos";
import IdPets from "../pages/pets/editar/id/Id";
import EditarConsultas from "../pages/consultas/editar/Editar";
import NovoConsultas from "../pages/consultas/novo/Novo";
import TodosConsultas from "../pages/consultas/todos/Todos";
import IdConsultas from "../pages/consultas/editar/id/Id";
import Login from "../pages/login/Login";
import EditarUsuarios from "../pages/usuarios/editar/Editar";
import NovoUsuarios from "../pages/usuarios/novo/Novo";
import TodosUsuarios from "../pages/usuarios/todos/Todos";
import IdUsuarios from "../pages/usuarios/editar/id/Id";


export default function Routers() {
    return (
            <Routes>
                
                <Route path= "home" element= {<Home/>}/>

                <Route path= "consultas/todos" element= {<TodosConsultas/>}>
                    <Route path= "editar" element= {<EditarConsultas/>}>
                        <Route path= "id" element= {<IdConsultas/>}/>
                    </Route>
                    <Route path= "novo" element= {<NovoConsultas/>}/>                    
                </Route>

                <Route path= "pets/todos" element= {<TodosPets/>}>
                    <Route path= "editar" element= {<EditarPets/>}>
                        <Route path= "id" element= {<IdPets/>}/>
                    </Route>
                    <Route path= "novo" element= {<NovoPets/>}/>
                </Route>

                <Route path= "clientes/todos" element= {<Todos/>}>
                    <Route path= "editar" element= {<Editar/>}>
                        <Route path= "id" element= {<Id/>}/>
                    </Route>
                    <Route path= "novo" element= {<Novo/>}/>
                </Route>
                
                <Route path= "login" element= {<Login/>}/>

                <Route path= "usuarios/todos" element= {<TodosUsuarios/>}>
                    <Route path= "editar" element= {<EditarUsuarios/>}>
                        <Route path= "id" element= {<IdUsuarios/>}/>
                    </Route>
                    <Route path= "novo" element= {<NovoUsuarios/>}/>
                </Route>

                <Route path="*" element={
                <main>
                    <p>There's nothing here!</p>
                </main>
                }
                />
                
            </Routes>
    )
}