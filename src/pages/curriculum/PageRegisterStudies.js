import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FormEducacion } from './FormEducacion';
export const PageRegisterStudies = () => {
    return (
        <>
            <Row className="mt-2 justify-content-md" id="PageRegisterStudies" >
                <Col md={{ span: 9, offset: 2 }}>
                    <h1 id="PageRegisterStudiesTitle">Educación</h1>
                    <FormEducacion></FormEducacion>
                </Col>
            </Row>
        </>
    )
}