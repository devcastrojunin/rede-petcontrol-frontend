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
            <Route path= "consulta/editar/:id" element={<EditarConsulta/>}/>
            <Route path="consulta/cadastrar" element={<NovaConsulta />} />

            <Route path="pets" element={<Pets />} />
            <Route path= "pets/editar/:id" element={<EditarPet/>}/>
            <Route path="pets/cadastrar" element={<NovoPet />} />

            <Route path="clientes" element={<Clientes />} />
            <Route path= "clientes/editar/:id" element={<EditarCliente/>}/>
            <Route path="clientes/cadastrar" element={<NovoCliente />} />

            <Route path="login" element={<Login />} />

            <Route path="usuarios" element={<Usuarios />} />
            <Route path= "usuario/editar/:id" element={<EditarUsuario/>}/>
            <Route path="usuario/cadastrar" element={<NovoUsuario />} />

            <Route path="*" element={
                <main>
                    <p>Página não existe</p>
                </main>
            } />
        </Routes>
    )
}