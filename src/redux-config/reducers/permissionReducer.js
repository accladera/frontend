import { USER_PERMISSION_ACTION } from "redux-config/CONSTANT";

const initialData = {
    type_user: 0
}
const permissionReducer = (state = initialData, action) => {
    switch (action.type) {
        case USER_PERMISSION_ACTION:
            return {
                ...state,
                type_user: action.typeUser
            }   
        default:
            return state;
    }
}
export default permissionReducer;