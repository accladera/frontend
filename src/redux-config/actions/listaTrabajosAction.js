import { ADD_LISTA_TRABAJOS_RESULTADO_ACTION, DROP_LISTA_TRABAJOS_RESULTADO_ACTION } from "redux-config/CONSTANT"

export const agregarListaTrabajosResultados = (lista_trabajos) => {

    return {
        type: ADD_LISTA_TRABAJOS_RESULTADO_ACTION,
        value: lista_trabajos,
    }
}

export const limpiarListaTrabajosResultados = () => {
    return {
        type: DROP_LISTA_TRABAJOS_RESULTADO_ACTION
    }
}
