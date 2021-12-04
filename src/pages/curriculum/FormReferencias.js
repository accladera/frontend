import { CURRICULUM_EDUCACION } from 'navigation/CONSTANTS';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postCurriculumClassifier } from 'services';
export const FormReferencias = () => {
    let history = useHistory();

    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [cellphone, setCellphone] = useState('');
    const curriculumId = useSelector(state => state.curriculumId.curriculum_id)
    const guardar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() !== false) {
            event.preventDefault();
            event.stopPropagation();
            const datos = {
                name,
                company,
                cellphone,
                "curriculumId": 1
            };
            // if (id === 0) {
            fetchCurriculumReferenciasPOST(datos);
            // } else {
            //     fetchCurriculumReferenciasPUT(datos);
            // }
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
    }
    const fetchCurriculumReferenciasPOST = (datos) => {
        postCurriculumClassifier("reference", datos).then((res) => {
            console.log(res)
            history.push(`${CURRICULUM_EDUCACION}`)
        }).catch((err) => {
            console.log(err.data)
        }
        )
    }
    return (
        <Form noValidate validated={validated} onSubmit={guardar} >
            <Row>
            <Form.Control  type="hidden" name="curriculumid" value={curriculumId} />

                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Referencia</Form.Label>
                    <Col sm="8">
                        <Form.Control required name="input-name" type="text" placeholder="Ingrese el dato" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>

                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Empresa</Form.Label>
                    <Col sm="8">
                        <Form.Control required name="input-company" type="text" placeholder="Ingrese el dato" value={company} onChange={(e) => { setCompany(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>

                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Celular</Form.Label>
                    <Col sm="8">
                        <Form.Control required name="input-cellphone" type="text" placeholder="Ingrese el dato" value={cellphone} onChange={(e) => { setCellphone(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
            </Row>
            <Row className="m-2 justify-content-md-end" xs="auto" >
                <Col>
                    <Button type="submit" id="btn-save">Guardar datos</Button>
                </Col>
                <Col>
                    <Link  className='btn btn-primary' to={CURRICULUM_EDUCACION}>Continuar</Link>
                </Col>
            </Row>

        </Form>
    )
}