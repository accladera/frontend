import { CURRICULUM_INDICE } from 'navigation/CONSTANTS';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postCurriculumClassifier } from 'services';
export const FormInformacionAdicional = () => {
    let history = useHistory();

    const [validated, setValidated] = useState(false);
    const [information, setInformation] = useState('');
    const curriculumId = useSelector(state => state.curriculumId.curriculum_id)
    const guardar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() !== false) {
            event.preventDefault();
            event.stopPropagation();
            const datos = {
                information,
                "curriculumId": 1
            };
            // if (id === 0) {
            fetchCurriculumInformacionAdicionalPOST(datos);
            // } else {
            //     fetchCurriculumInformacionAdicionalPUT(datos);
            // }
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
    }
    const fetchCurriculumInformacionAdicionalPOST = (datos) => {
        postCurriculumClassifier("idom", datos).then((res) => {
            console.log(res)
            history.push(`${CURRICULUM_INDICE}`)
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
                    <Form.Label column sm="4">Información</Form.Label>
                    <Col sm="8">
                        <Form.Control required name="input-information" type="text" placeholder="Ingrese el dato" value={information} onChange={(e) => { setInformation(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
            </Row>
            <Row className="m-2 justify-content-md-end" xs="auto" >
                <Col>
                    <Button type="submit" id="btn-save">Guardar datos</Button>
                </Col>
                <Col>
                    <Link className='btn btn-primary' to={CURRICULUM_INDICE}>Volver a  inicio</Link>
                </Col>
            </Row>

        </Form>
    )
}