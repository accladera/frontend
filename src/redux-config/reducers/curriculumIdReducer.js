import { CURRICULUM_ID_ACTION, CURRICULUM_ID_REMOVE_ACTION } from "redux-config/CONSTANT";

const initialData = {
    curriculum_id: ""
}
const curriculumIdReducer = (state = initialData, action) => {
    switch (action.type) {
        case CURRICULUM_ID_ACTION:
            return {
                ...state,
                curriculum_id: action.value
            }   
        case CURRICULUM_ID_REMOVE_ACTION:
            return{
                ...state,
                curriculum_id: ''
            }
        default:
            return state;
    }
}
export default curriculumIdReducer;