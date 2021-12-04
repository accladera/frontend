import React from 'react';
import { Row } from 'react-bootstrap';
import { CardsResultadoBusqueda } from './CardsResultadoBusqueda';
export const PageSearchJobsResults = ()=>{
    
    return(
        <Row>
            <h1>Resultado de la busqueda</h1>
            <CardsResultadoBusqueda></CardsResultadoBusqueda>
        </Row>
    )
}