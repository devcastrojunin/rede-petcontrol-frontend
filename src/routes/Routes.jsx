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
import TemplateDefault from "../templates/TemplateDefault";
import TemplateAuth from "../templates/TemplateAuth";

export default function Routers() {
    return (
        <Routes>

            <Route path="/" element={<TemplateAuth/>}>
                <Route path="/login" element={<Login />} />
            </Route>

            <Route path="/" element={<TemplateDefault />}>
                <Route path="home" element={<Home />} />

                <Route path="consultas" element={<Consultas />} />
                <Route path="consulta/editar/:id" element={<EditarConsulta />} />
                <Route path="consulta/cadastrar" element={<NovaConsulta />} />

                <Route path="pets" element={<Pets />} />
                <Route path="pets/editar/:id" element={<EditarPet />} />
                <Route path="pets/cadastrar" element={<NovoPet />} />

                <Route path="clientes" element={<Clientes />} />
                <Route path="clientes/editar/:id" element={<EditarCliente />} />
                <Route path="clientes/cadastrar" element={<NovoCliente />} />

                <Route path="usuarios" element={<Usuarios />} />
                <Route path="usuarios/editar/:id" element={<EditarUsuario />} />
                <Route path="usuarios/cadastrar" element={<NovoUsuario />} />

                <Route path="*" element={
                    <main>
                        <p>Página não existe</p>
                    </main>
                } />
            </Route>
        </Routes>
    )
}