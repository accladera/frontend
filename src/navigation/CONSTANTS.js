
//Home
export const HOME = "/"
export const PERFIL_CLIENTE = "/client"
export const DETALLE_EMPLEO = "/job"
export const DASHBOARD = "/dashboard"
export const LOGIN = "/login"
export const REGISTRO_CLIENTE = "/register"
export const REGISTRO_GERENTE = "/register-mng"
export const REGISTRO_EMPRESA = "/register-cmp"
export const FORGOT_PASSWORD = "/forgot-password"

//Job
export const JOB_BUSQUEDA = "/job/search"
export const JOB_BUSQUEDA_RESULTADO = "/job/result"
export const JOB_BUSQUEDA_RESULTADO_ITEM = (id)=>"/job/result/"+id;
export const JOB_BUSQUEDA_RESULTADO_ITEM_DEF= "/job/result/:id";

export const COMPANY_ID_List_Jobs=(idCompanie)=> "/job/"+idCompanie+"/listCompanies";
export const COMPANY_ID_List_JobsDef= "/job/:idCompanie/listCompanies";

//Curriculum
export const CURRICULUM = "/curriculum/"
export const CURRICULUM_INDICE = "/curriculum/home/"
export const CURRICULUM_DATOS_PERSONALES= "/curriculum/1/"
export const CURRICULUM_EDUCACION = "/curriculum/6/"
export const CURRICULUM_EXPERIENCIA_LABORAL = "/curriculum/2/"
export const CURRICULUM_HABILIDADES = "/curriculum/3/"
export const CURRICULUM_IDIOMAS = "/curriculum/7/"
export const CURRICULUM_INFORMACION_ADICIONAL = "/curriculum/8/"
export const CURRICULUM_INFORMACION_GENERAL = "/curriculum/4/"
export const CURRICULUM_REFERENCIAS = "/curriculum/5/"

//Bussines
export const LIST_COMPANIES = "/companies/list/"
export const COMPANY_ID=(id)=> "/companies/"+id+"/";


