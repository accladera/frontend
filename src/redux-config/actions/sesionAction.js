import { CERRAR_SESION_ACTION, INICIAR_SESION_ACTION } from "redux-config/CONSTANT"

export const sesionIniciada = (access_token ) => {
    return {
        type: INICIAR_SESION_ACTION,
        value: access_token,
    }
}
export const sesionCerrada = () => {
    return {
        type: CERRAR_SESION_ACTION
    }
}

