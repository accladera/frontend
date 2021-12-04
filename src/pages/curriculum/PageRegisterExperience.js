import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FormExperienciaLaboral } from './FormExperienciaLaboral';
export const PageRegisterExperience = () => {
    return (
        <>
            <Row className="mt-2 justify-content-md" id="PageRegisterExperience">
                <Col md={{ span: 9, offset: 2 }}>
                    <h1 id="PageRegisterExperienceTitle">Experiencia Laboral</h1>
                    <FormExperienciaLaboral></FormExperienciaLaboral>
                </Col>
            </Row>
        </>
    )
}