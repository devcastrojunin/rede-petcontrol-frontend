import { Outlet } from "react-router-dom";

export default function Pets() {
    return (
        <div>
            <h2>Pets</h2>

        <Outlet/>    
        </div>
    );
}