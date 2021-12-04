import { CERRAR_SESION_ACTION, INICIAR_SESION_ACTION } from "redux-config/CONSTANT";

const initialData = {
    access_token: ""
}

const sesionReducer = (state = initialData, action) => {
    switch (action.type) {
        case INICIAR_SESION_ACTION:
            return {
                ...state,
                access_token: action.value
            }
        case CERRAR_SESION_ACTION:
            return {
                ...state,
                access_token: ''
            }
        default:
            return state;
    }
}
export default sesionReducer;