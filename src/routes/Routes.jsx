import { Routes, Route } from "react-router-dom"
import {
    Home,
    Consultas,
    EditarConsulta,
    NovaConsulta,
    Pets,
    EditarPet,
    NovoPet,
    Clientes,
    EditarCliente,
    NovoCliente,
    Login,
    Usuarios,
    EditarUsuario,
    NovoUsuario
} from "../pages";



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
            <Route path= "clientes/editar/:id" element={<EditarCliente/>}/>
            <Route path="clientes/cadastrar" element={<NovoCliente />} />

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