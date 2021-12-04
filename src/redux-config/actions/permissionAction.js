import { USER_PERMISSION_ACTION, USER_PERMISSION_REMOVE_ACTION } from "redux-config/CONSTANT"

export const permisos = (type_User) => {
    return {
        type: USER_PERMISSION_ACTION,
        typeUser: type_User
    }
}
export const borrarPermisos= ()=>{
    return{
        type: USER_PERMISSION_REMOVE_ACTION
    }
}
