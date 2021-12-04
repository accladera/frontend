// const REACT_APP_BASE_URL_CURRICULUM="https://localhost:5001/api";
// const REACT_APP_BASE_URL_SYSTEM="https://localhost:5002/api/system";
//const REACT_APP_BASE_URL_PROFILES="https://localhost:5002/api/system";
//const REACT_APP_BASE_URL_BUSSINES="https://localhost:5005/api/business";/* eslint-enable no-unused-vars */
//const REACT_APP_BASE_URL_AUTH="https://localhost:5002/api/system";/* eslint-enable no-unused-vars */
//const REACT_APP_BASE_URL_DOCUMENT="https://localhost:5002/api/system"; /* eslint-enable no-unused-vars */

//Auth 
export const AUTH_REGISTER = `${process.env.REACT_APP_BASE_URL_AUTH}/store/client`;
export const AUTH_REGISTER_GERENTE = `${process.env.REACT_APP_BASE_URL_AUTH}/store/gerent`;
export const AUTH_LOGIN= `${process.env.REACT_APP_BASE_URL_AUTH}/login`;

//Profiles
export const PROFILES_CLIENT_STORE = `${process.env.REACT_APP_BASE_URL_PROFILES}/profiles-client/store`;



// Curriculum                                   
export const CURRICULUM_URL_POST_GET= `${process.env.REACT_APP_BASE_URL_CURRICULUM}`;
export const CURRICULUM_ABILITIES_URL_POST= `${process.env.REACT_APP_BASE_URL_CURRICULUM}/abilities`;
export const CURRICULUM_INFORMATION_URL_POST= `${process.env.REACT_APP_BASE_URL_CURRICULUM}/information`;
export const CURRICULUM_EXPERENCE_URL_POST= `${process.env.REACT_APP_BASE_URL_CURRICULUM}/experence`;
export const CURRICULUM_GENERAL_URL_POST= `${process.env.REACT_APP_BASE_URL_CURRICULUM}/general`;
export const CURRICULUM_IDOM_URL_POST= `${process.env.REACT_APP_BASE_URL_CURRICULUM}/idom`;
export const CURRICULUM_REFERENCE_URL_POST= `${process.env.REACT_APP_BASE_URL_CURRICULUM}/reference`;
export const CURRICULUM_STUDIES_URL_POST= `${process.env.REACT_APP_BASE_URL_CURRICULUM}/studies`;

//System
export const SYSTEM_CLASSIFIER= `${process.env.REACT_APP_BASE_URL_SYSTEM}/classifier`;
export const SYSTEM_CITY= `${process.env.REACT_APP_BASE_URL_SYSTEM}/city`;


// Bussines 
export const BUSINESS_COMPANY= `${process.env.REACT_APP_BASE_URL_BUSINESS}/company`;
export const BUSINESS_JOB= `${process.env.REACT_APP_BASE_URL_BUSINESS}/job`;
export const BUSINESS_REGISTER_EMPRESA = `${process.env.REACT_APP_BASE_URL_BUSINESS}/company/store`;

