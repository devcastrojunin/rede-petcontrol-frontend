import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Consultas from "../pages/Consultas";
import EditarConsulta from "../pages/Consultas/EditarConsulta";
import NovaConsulta from "../pages/Consultas/NovaConsulta";
import Pets from "../pages/Pets";
import EditarPet from "../pages/Pets/EditarPet";
import NovoPet from "../pages/Pets/NovoPet";
import Clientes from "../pages/Clientes";
import EditarCliente from "../pages/Clientes/EditarCliente";
import NovoCliente from "../pages/Clientes/NovoCliente";
import Login from "../pages/Login";
import Usuarios from "../pages/Usuarios";
import EditarUsuario from "../pages/Usuarios/EditarUsuario";
import NovoUsuario from "../pages/Usuarios/NovoUsuario";



export default function Routers() {
    return (
        <Routes>
            <Route path="home" element={<Home />} />

            <Route path="consultas" element={<Consultas />} />
            <Route path= "editarConsulta" element={<EditarConsulta/>}/>
            <Route path="novoConsulta" element={<NovaConsulta />} />

            <Route path="pets" element={<Pets />} />
            <Route path= "editarPet" element={<EditarPet/>}/>
            <Route path="novoPet" element={<NovoPet />} />

            <Route path="clientes" element={<Clientes />} />
            <Route path= "editarCliente" element={<EditarCliente/>}/>
            <Route path="novoCliente" element={<NovoCliente />} />

            <Route path="login" element={<Login />} />

            <Route path="usuarios" element={<Usuarios />} />
            <Route path= "editarUsuario" element={<EditarUsuario/>}/>
            <Route path="novoUsuario" element={<NovoUsuario />} />

            <Route path="*" element={
                <main>
                    <p>Página não existe</p>
                </main>
            } />
        </Routes>
    )
}