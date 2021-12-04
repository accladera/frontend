import { CURRICULUM_INFORMACION_GENERAL } from 'navigation/CONSTANTS';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postCurriculumClassifier } from 'services';
export const FormHabilidades = () => {
    let history = useHistory();

    const [validated, setValidated] = useState(false);
    const [ability, setAbility] = useState('');
    const [experienceYears, setExperienceYears] = useState('');
    const curriculumId = useSelector(state => state.curriculumId.curriculum_id)
    const guardar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() !== false) {
            event.preventDefault();
            event.stopPropagation();
            const datos = {

                ability,
                experienceYears,
                "curriculumId": 1
            };
            // if (id === 0) {
            fetchCurriculumHabilidadesPOST(datos);
            // } else {
            //     fetchCurriculumHabilidadesPUT(datos);
            // }
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
    }
    const fetchCurriculumHabilidadesPOST = (datos) => {
        postCurriculumClassifier("abilities", datos).then((res) => {
            console.log(res)
            history.push(`${CURRICULUM_INFORMACION_GENERAL}`)
        }).catch((err) => {
            console.log(err.data)
        }
        )
    }
    return (
        <Form noValidate validated={validated} onSubmit={guardar} >
            <Row  >
            <Form.Control  type="hidden" name="curriculumid" value={curriculumId} />

                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Habilidad</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="text" placeholder="Ingrese los datos"  name="input-ability" value={ability} onChange={(e) => { setAbility(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>

                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Años de experiencia</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="number" placeholder="Ingrese los datos" name="input-experienceYears" value={experienceYears} onChange={(e) => { setExperienceYears(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
            </Row>
            <Row className="m-2 justify-content-md-end" xs="auto" >
                <Col>
                    <Button type="submit" id="btn-save" >Guardar datos</Button>
                </Col>
                <Col>
                    <Link className='btn btn-primary' to={CURRICULUM_INFORMACION_GENERAL}>Continuar</Link>
                </Col>
            </Row>
        </Form>
    )
}