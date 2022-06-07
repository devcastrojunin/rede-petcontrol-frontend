import axios from 'axios';

export const hasJWT = () => {
    //Verifica se o token existe
    return localStorage.getItem("token") ? true : false;
}

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else
        delete axios.defaults.headers.common["Authorization"];
 }