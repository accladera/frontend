import Axios from "axios";
import { SYSTEM_ERROR } from "config/CONSTANTS";
import { CURRICULUM_URL_POST_GET } from "./CONSTANTS";



export const getCurriculum = (id) => {
    return new Promise((resolve, reject) => {
        try {
            
            Axios.get(CURRICULUM_URL_POST_GET + "/" + id + "/")
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

export const postCurriculum = (curriculum) => {
    return new Promise((resolve, reject) => {
        try {
            const headers = {
                'Content-Type': 'application/json; charset=utf-8',
                'content-type': "application/json"
            };
        
            Axios.post(CURRICULUM_URL_POST_GET, curriculum, {headers})
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

export const postCurriculumClassifier = (tipo,curriculum) => {
    return new Promise((resolve, reject) => {
        try {
            const headers = {
                'Content-Type': 'application/json; charset=utf-8',
                'content-type': "application/json"
            };
            
            Axios.post(CURRICULUM_URL_POST_GET+"/"+tipo, curriculum, {headers})
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err)
                })
        } catch (err) {
            reject({ "name": "System", "message": SYSTEM_ERROR })
        }
    });
}