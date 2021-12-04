import { CURRICULUM_DATOS_PERSONALES, CURRICULUM_EDUCACION, CURRICULUM_EXPERIENCIA_LABORAL, CURRICULUM_HABILIDADES, CURRICULUM_IDIOMAS, CURRICULUM_INFORMACION_ADICIONAL, CURRICULUM_INFORMACION_GENERAL, CURRICULUM_REFERENCIAS } from 'navigation/CONSTANTS';
import React from 'react';
import {  Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const PageIndice = () => {
    return (

        <Row className="justify-content-md-center">
            <Row><h1>Creación de currículo</h1></Row>
            <Row>
                <Col className="m-4">
                    <Row className="mt-4"><Link id="btn-curriculum" className='btn btn-primary' to={CURRICULUM_DATOS_PERSONALES}>#1 Datos personales</Link></Row>
                    <Row className="mt-4"><Link id="btn-curriculum-experience" className='btn btn-primary' to={CURRICULUM_EXPERIENCIA_LABORAL}>#2 Experiencia Laboral</Link></Row>
                    <Row className="mt-4"><Link id="btn-curriculum-abilities" className='btn btn-primary' to={CURRICULUM_HABILIDADES}>#3 Habilidades</Link></Row>
                    <Row className="mt-4"><Link id="btn-curriculum-information" className='btn btn-primary' to={CURRICULUM_INFORMACION_ADICIONAL}>#4 Informacion Adicional</Link></Row>
                </Col>
                <Col className="m-4">
                    <Row  className="mt-4"><Link id="btn-curriculum-references" className='btn btn-primary' to={CURRICULUM_REFERENCIAS }>#5 Referencias</Link></Row>
                    <Row  className="mt-4"><Link id="btn-curriculum-studies" className='btn btn-primary' to={CURRICULUM_EDUCACION }>#6 Educación</Link></Row>
                    <Row  className="mt-4"><Link id="btn-curriculum-idom" className='btn btn-primary' to={CURRICULUM_IDIOMAS }>#7 Idiomas</Link></Row>
                    <Row  className="mt-4"><Link id="btn-curriculum-general" className='btn btn-primary' to={CURRICULUM_INFORMACION_GENERAL }>#8 Información General</Link></Row>
                </Col>
            </Row>
        </Row>
    )
}