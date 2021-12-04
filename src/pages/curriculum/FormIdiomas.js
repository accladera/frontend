import { SelectorIdioma, SelectorNivelIdioma } from 'components/system';
import { CURRICULUM_INFORMACION_ADICIONAL } from 'navigation/CONSTANTS';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postCurriculumClassifier } from 'services';
export const FormIdiomas = () => {
    let history = useHistory();

    const [validated, setValidated] = useState(false);
    const [idiomId, setIdiomId] = useState('');
    const [levelWrite, setLevelWrite] = useState('');
    const [levelOral, setLevelOral] = useState('');
    const [levelRead, setLevelRead] = useState('');
    const curriculumId = useSelector(state => state.curriculumId.curriculum_id)
    const guardar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() !== false) {
            event.preventDefault();
            event.stopPropagation();
            const datos = {
                idiomId,
                levelWrite,
                levelOral,
                levelRead,
                "curriculumId": 1
            };
            // if (id === 0) {
            fetchCurriculumIdiomasPOST(datos);
            // } else {
            //     fetchCurriculumIdiomasPUT(datos);
            // }
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
    }
    const fetchCurriculumIdiomasPOST = (datos) => {
        postCurriculumClassifier("idom", datos).then((res) => {
            console.log(res)
            history.push(`${CURRICULUM_INFORMACION_ADICIONAL}`)
        }).catch((err) => {
            console.log(err.data)
        }
        )
    }
    return (
        <Form noValidate validated={validated} onSubmit={guardar} >
            <Row>
            <Form.Control  type="hidden" name="curriculumid" value={curriculumId} />

                <SelectorIdioma required name="input-idiomId" value={idiomId} onChange={(e) => { setIdiomId(e.target.value) }} ></SelectorIdioma>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Nivel de conocimiento en escritura</Form.Label>
                    <SelectorNivelIdioma required name="input-levelWrite" value={levelWrite} onChange={(e) => { setLevelWrite(e.target.value) }}></SelectorNivelIdioma>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Nivel de conocimiento en el hablar </Form.Label>
                    <SelectorNivelIdioma required name="input-levelOral" value={levelOral} onChange={(e) => { setLevelOral(e.target.value) }}></SelectorNivelIdioma>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Nivel de conocimiento en la lectura</Form.Label>
                    <SelectorNivelIdioma required name="input-levelRead" value={levelRead} onChange={(e) => { setLevelRead(e.target.value) }}></SelectorNivelIdioma>
                </Form.Group>
            </Row>
            <Row className="m-2 justify-content-md-end" xs="auto" >
                <Col>
                    <Button type="submit" id="btn-save">Guardar datos</Button>
                </Col>
                <Col>
                    <Link className='btn btn-primary' to={CURRICULUM_INFORMACION_ADICIONAL}>Continuar</Link>
                </Col>
            </Row>
        </Form>
    )
}