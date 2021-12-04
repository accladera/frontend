import React from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import { FormInformacionAdicional } from './FormInformacionAdicional';
export const PageRegisterInformation = () => {
    return (
        <>
            <Row className="mt-2 justify-content-md" id="PageRegisterInformation">
                <Col md={{ span: 9, offset: 2 }}>
                    <h1 id="PageRegisterInformationTitle">Información adicional</h1>
                    <p>En esta sección puedes agregar información adicional que no esté reflejada en otras secciones de tu currículum y que sea relevante para tu perfil profesional, como por ejemplo: distinciones, premios, afiliaciones profesionales, pasatiempos, etc.</p>
                    <Alert variant="danger">
                        POR FAVOR NO AGREGAR EN ESTA SECCIÓN CURSOS, SEMINARIOS, TALLERES, DIPLOMADOS, ETC. ESTOS SE DEBEN AGREGAR EN LA SECCIÓN DE EDUCACIÓN.
                    </Alert>
                    <FormInformacionAdicional></FormInformacionAdicional>
                </Col>
            </Row>
        </>
    )
}