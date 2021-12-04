import { USER_ADD_IDENTIFY_ACTION, USER_DROP_IDENTIFY_ACTION } from "redux-config/CONSTANT"

export const agregarIdentificacion = (id_user) => {

    return {
        type: USER_ADD_IDENTIFY_ACTION,
        value: id_user,
    }
}

export const limpiarIdentificacion = () => {
    return {
        type: USER_DROP_IDENTIFY_ACTION
    }
}
