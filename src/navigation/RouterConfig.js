import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageIndice, PageListCurriculum, PageRegisterAbilities, PageRegisterCurriculum, PageRegisterExperience, PageRegisterGeneral, PageRegisterIdom, PageRegisterInformation, PageRegisterReference, PageRegisterStudies } from 'pages/curriculum';
import { PageDashBoard, PageNotFound, PageHome, PageForgot } from 'pages/home';
import { CURRICULUM_INDICE, CURRICULUM_DATOS_PERSONALES, DASHBOARD, 
    HOME, CURRICULUM_EXPERIENCIA_LABORAL, CURRICULUM_HABILIDADES, 
    CURRICULUM_INFORMACION_ADICIONAL, CURRICULUM_INFORMACION_GENERAL, 
    CURRICULUM_IDIOMAS, CURRICULUM_EDUCACION, CURRICULUM_REFERENCIAS, LOGIN, 
    FORGOT_PASSWORD, REGISTRO_CLIENTE, REGISTRO_GERENTE, REGISTRO_EMPRESA, LIST_COMPANIES, 
    JOB_BUSQUEDA, JOB_BUSQUEDA_RESULTADO,COMPANY_ID_List_JobsDef, PERFIL_CLIENTE
    , DETALLE_EMPLEO, 
    JOB_BUSQUEDA_RESULTADO_ITEM_DEF,
    CURRICULUM} from './CONSTANTS';
import { PageLogin, PageRegisterCliente, PageRegisterGerente } from 'pages/auth';
import { PageRegisterEmpresa } from 'pages/auth/PageRegisterEmpresa';
import {  ListCompanyByUser,ListJobByCompanie } from 'pages/bussines';
import { PageResultadoJob, PageSearchJobs, PageSearchJobsResults } from 'pages/job';
import { PageProfileClient } from 'pages/profile';
import { PageJob } from 'pages/job';

export const RouterConfig = () => {
    return (
        <Switch>
            <Route exact path={HOME} component={PageHome}></Route>
            <Route exact path={PERFIL_CLIENTE} component={PageProfileClient}></Route>
            <Route exact path={DETALLE_EMPLEO} component={PageJob}></Route>
            <Route exact path={DASHBOARD} component={PageDashBoard}></Route>
            <Route exact path={LOGIN} component={PageLogin}></Route>
            <Route exact path={FORGOT_PASSWORD} component={PageForgot}></Route>
            <Route exact path={REGISTRO_CLIENTE} component={PageRegisterCliente}></Route>
            <Route exact path={REGISTRO_GERENTE} component={PageRegisterGerente}></Route>
            <Route exact path={REGISTRO_EMPRESA} component={PageRegisterEmpresa}></Route>
            
            <Route exact path={CURRICULUM} component={PageListCurriculum}></Route>
            <Route exact path={CURRICULUM_INDICE} component={PageIndice}></Route>
            <Route exact path={CURRICULUM_DATOS_PERSONALES} component={PageRegisterCurriculum}></Route>
            <Route exact path={CURRICULUM_HABILIDADES} component={PageRegisterAbilities}></Route>
            <Route exact path={CURRICULUM_INFORMACION_ADICIONAL} component={PageRegisterInformation}></Route>
            <Route exact path={CURRICULUM_EXPERIENCIA_LABORAL} component={PageRegisterExperience}></Route>
            <Route exact path={CURRICULUM_INFORMACION_GENERAL} component={PageRegisterGeneral}></Route>
            <Route exact path={CURRICULUM_IDIOMAS} component={PageRegisterIdom}></Route>
            <Route exact path={CURRICULUM_REFERENCIAS} component={PageRegisterReference}></Route>
            <Route exact path={CURRICULUM_EDUCACION} component={PageRegisterStudies}></Route>

            <Route exact path={LIST_COMPANIES} component={ListCompanyByUser}></Route>

            <Route exact path={JOB_BUSQUEDA} component={PageSearchJobs}></Route>
            <Route exact path={JOB_BUSQUEDA_RESULTADO} component={PageSearchJobsResults}></Route>
            <Route exact path={JOB_BUSQUEDA_RESULTADO_ITEM_DEF} component={PageResultadoJob} ></Route>

            <Route exact path={COMPANY_ID_List_JobsDef} component={ListJobByCompanie}></Route>

            <Route path="/*" component={PageNotFound}></Route>

        </Switch>
    )
}