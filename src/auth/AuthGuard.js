import api from '../services/api';

export const hasJWT = () => {
    //Verifica se o token existe
    return localStorage.getItem("token") ? true : false;
}

export const setAuthToken = token => {
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else
        delete api.defaults.headers.common["Authorization"];
 }