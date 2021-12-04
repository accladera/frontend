import axios from "axios";
import { SYSTEM_ERROR } from "config/CONSTANTS";
import { AUTH_LOGIN, AUTH_REGISTER, AUTH_REGISTER_GERENTE,PROFILES_CLIENT_STORE } from "./CONSTANTS";

export const postRegister = (user) => {
    return new Promise((resolve, reject) => {
        try {
            const headers = {
                'Content-Type': 'application/json; charset=utf-8',
                'content-type': "application/json"
            };
        
            axios.post(AUTH_REGISTER, user, {headers})
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err)
                })
        } catch (err) {
            reject({ "name": "System", "message": SYSTEM_ERROR })
        }
    });
}

export const postRegisterGerente = (datos) => {
    return new Promise((resolve, reject) => {
        try {
            const headers = {
                'Content-Type': 'application/json; charset=utf-8',
                'content-type': "application/json"
            };
        
            axios.post(AUTH_REGISTER_GERENTE, datos, {headers})
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err)
                })
        } catch (err) {
            reject({ "name": "System", "message": SYSTEM_ERROR })
        }
    });
}
export const postLogin = (datos) => {
    return new Promise((resolve, reject) => {
        try {
            const headers = {
                'Content-Type': 'application/json; charset=utf-8',
                'content-type': "application/json"
            };
        
            axios.post(AUTH_LOGIN, datos, {headers})
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err)
                })
        } catch (err) {
            reject({ "name": "System", "message": SYSTEM_ERROR })
        }
    });
}


export const postRegisterClientProfiles = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const headers = {
                'Content-Type': 'application/json; charset=utf-8',
                'content-type': "application/json"
            };
        
            axios.post(PROFILES_CLIENT_STORE, data, {headers})
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err)
                })
        } catch (err) {
            reject({ "name": "System", "message": SYSTEM_ERROR })
        }
    });
}