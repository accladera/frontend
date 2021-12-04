import identifyReducer from "./identifyReducer";
import permissionReducer from "./permissionReducer";
import sesionReducer from "./sesionReducer";
import curriculumIdReducer from "./curriculumIdReducer";
import listaTrabajosReducer from "./listaTrabajosReducer";

const { combineReducers } = require("redux");

export const rootReducer = combineReducers({
   
    sesion: sesionReducer,
    permisos: permissionReducer,
    identificar: identifyReducer,
    curriculumId: curriculumIdReducer,
    listaResultados: listaTrabajosReducer
});