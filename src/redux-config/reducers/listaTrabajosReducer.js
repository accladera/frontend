import { ADD_LISTA_TRABAJOS_RESULTADO_ACTION, DROP_LISTA_TRABAJOS_RESULTADO_ACTION } from "redux-config/CONSTANT";

const initialData = {
    lista_trabajos: []
}
const listaTrabajosReducer = (state = initialData, action) => {
    switch (action.type) {
        case ADD_LISTA_TRABAJOS_RESULTADO_ACTION:
            return {
                ...state,
                lista_trabajos: action.value
            }   
        case DROP_LISTA_TRABAJOS_RESULTADO_ACTION:
            return{
                ...state,
                lista_trabajos: []
            }
        default:
            return state;
    }
}
export default listaTrabajosReducer;