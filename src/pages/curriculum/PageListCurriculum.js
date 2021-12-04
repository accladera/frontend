import { CURRICULUM_DATOS_PERSONALES } from 'navigation/CONSTANTS';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ListCurriculum } from './ListCurriculum';
export const PageListCurriculum = () => {
    return (

        <Row className="justify-content-md-center">
            <Row>
                <Col>
                    <h1>Currículum</h1>
                </Col>
                <Col>
                <Link to={CURRICULUM_DATOS_PERSONALES} className="btn btn-primary"> Crear curriculum</Link>
                </Col>
            </Row>

            <ListCurriculum></ListCurriculum>
        </Row>
    )
}