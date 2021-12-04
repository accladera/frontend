import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FormDatosPersonales } from './FormDatosPersonales';
export const PageRegisterCurriculum = (props) => {
    return (
        <>
            <Row className="mt-2 justify-content-md" id="PageRegisterCurriculum" >
                <Col md={{ span: 9, offset: 2 }}>
                    <h1 id="PageRegisterCurriculumTitle" >Datos Personales</h1>
                    <FormDatosPersonales {...props} ></FormDatosPersonales>
                </Col>
            </Row>
        </>
    )
}