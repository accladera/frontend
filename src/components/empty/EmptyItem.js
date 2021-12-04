import React from 'react';
import { Jumbotron, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const EmtyItem = (props) =>{
    <Row>
    <Jumbotron>
        <h1>Error en la búsqueda</h1>
        <p>
            El elemento que solícito no existe o se ha dado de baja.
        </p>
        <p>
            <Link className='btn btn-primary m-1' {...props} >Volver</Link>
        </p>
    </Jumbotron>
</Row>
}