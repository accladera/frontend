import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FormReferencias } from './FormReferencias';
export const PageRegisterReference = () => {
    return (
        <>
            <Row className="mt-2 justify-content-md" id="PageRegisterReference">
                <Col md={{ span: 9, offset: 2 }}>
                    <h1 id="PageRegisterReferenceTitle" >Referencias</h1>
                    <FormReferencias></FormReferencias>
                </Col>
            </Row>
        </>
    )
}