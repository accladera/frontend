import { CURRICULUM_ID_ACTION, CURRICULUM_ID_REMOVE_ACTION } from "redux-config/CONSTANT"

export const agregarCurriculumId = (id_curriculum ) => {
    return {
        type: CURRICULUM_ID_ACTION,
        value: id_curriculum,
    }
}

export const limpiarCurriculumId = () => {
    return {
        type: CURRICULUM_ID_REMOVE_ACTION
    }
}
