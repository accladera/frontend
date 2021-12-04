import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FormInformacionGeneral } from './FormInformacionGeneral';
export const PageRegisterGeneral = () => {
    return (
        <>
            <Row className="mt-2 justify-content-md" id="PageRegisterGeneral">
                <Col md={{ span: 9, offset: 2 }}>
                    <h1 id="PageRegisterGeneralTitle">Información general</h1>
                    <FormInformacionGeneral></FormInformacionGeneral>
                </Col>
            </Row>
        </>
    )
}