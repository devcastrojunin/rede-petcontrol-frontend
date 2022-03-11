import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <Link to= "/home">Home</Link>
        <Link to= "/clientes">Clientes</Link>
        <Link to= "/pets">Pets</Link>
        <Link to= "/consultas">Consultas</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

 
