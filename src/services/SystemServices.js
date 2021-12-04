import axios from "axios";
import { SYSTEM_ERROR } from "config/CONSTANTS";
import { SYSTEM_CLASSIFIER , SYSTEM_CITY} from "./CONSTANTS";


export const getClassifier = (url) => {
    return new Promise((resolve, reject) => {
        try {
            axios.get(SYSTEM_CLASSIFIER + "/" + url + "/")
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

export const getClassifierOnly = (url,id) => {
    return new Promise((resolve, reject) => {
        try {
            axios.get(SYSTEM_CLASSIFIER + "/" + url + "?keys="+id)
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

export const getCity = (idCountry) => {

    return new Promise((resolve, reject) => {
        try {
            axios.get(SYSTEM_CITY + "/" + idCountry + "/country")
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


export const getSystemCountry = (idCountry) => {
    return new Promise((resolve, reject) => {
        try {
            axios.get(SYSTEM_CLASSIFIER + "/country?keys=" + idCountry)
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

export const getSystemCity = (idCity) => {
    return new Promise((resolve, reject) => {
        try {
            axios.get(SYSTEM_CITY + "/" + idCity)
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