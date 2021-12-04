import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FormBusqueda } from './FormBusqueda';
export const PageSearchJobs = () => {

    return (
        <Row className="mt-2 justify-content-md" id="PageSearchJobs">
            <h1>Buscar empleo</h1>
            <Col md={{ span: 9, offset: 2 }}>
                <FormBusqueda></FormBusqueda>
            </Col>
        </Row>
    )
}