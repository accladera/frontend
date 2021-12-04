import { HOME } from 'navigation/CONSTANTS'
import React from 'react'
import {  Jumbotron, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const EmptyList = () => {
    return (
        <Row>
            <Jumbotron>
                <h1>Lista vacía</h1>
                <p>
                    No se ha registrado ningún elemento.
                </p>
                <div style={{ display: 'none' }}>
                    <Link className='btn btn-primary m-1 btn-sm' to={HOME} >Volver</Link>
                </div>
            </Jumbotron>
        </Row>
    )
}