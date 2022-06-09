import {BrowserRouter} from "react-router-dom"
import {setAuthToken} from "./auth/AuthGuard"
import Routers from "./routes/Routes"

export default function App() {
    const token = localStorage.getItem("token")
    if (token) {
        setAuthToken(token)
    }

    return (
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
    )
}
