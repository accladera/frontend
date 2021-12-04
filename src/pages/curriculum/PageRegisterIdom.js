import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FormIdiomas } from './FormIdiomas';
export const PageRegisterIdom = () => {
    return (
        <>
            <Row className="mt-2 justify-content-md" id="PageRegisterIdom">
                <Col md={{ span: 9, offset: 1 }}>
                    <h1 id="PageRegisterIdomTitle">Idiomas</h1>
                    <FormIdiomas></FormIdiomas>
                </Col>
            </Row>
        </>
    )
}