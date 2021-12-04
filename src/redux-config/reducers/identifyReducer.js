import { USER_ADD_IDENTIFY_ACTION, USER_DROP_IDENTIFY_ACTION } from "redux-config/CONSTANT";

const initialData = {
    id_user: 0
}
const identifyReducer = (state = initialData, action) => {
    switch (action.type) {
        case USER_ADD_IDENTIFY_ACTION:
            return {
                ...state,
                id_user: action.value
            }   
        case USER_DROP_IDENTIFY_ACTION:
            return{
                ...state,
                id_user: 0
            }
        default:
            return state;
    }
}
export default identifyReducer;