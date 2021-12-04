import { SelectorAreaTrabajo, SelectorPais } from 'components/system';
import { CURRICULUM_HABILIDADES } from 'navigation/CONSTANTS';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postCurriculumClassifier } from 'services';
export const FormExperienciaLaboral = () => {
    let history = useHistory();

    const [validated, setValidated] = useState(false);
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [areaWorkId, setAreaWorkId] = useState('');
    const [countryId, setCountryId] = useState('');
    const [ubication, setUbication] = useState('');
    const [dateInit, setDateInit] = useState('');
    const [dateFinish, setDateFinish] = useState('');
    const [currentlyHasThePosition, setCurrentlyHasThePosition] = useState(false);
    const [dependents, setDependents] = useState(0);
    const [experienceYears, setExperienceYears] = useState(0);
    const [description, setDescription] = useState('');
    const curriculumId = useSelector(state => state.curriculumId.curriculum_id)

    const guardar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() !== false) {
            event.preventDefault();
            event.stopPropagation();
            const datos = {
                position,
                company,
                areaWorkId,
                countryId,
                ubication,
                dateInit,
                dateFinish,
                currentlyHasThePosition,
                dependents,
                experienceYears,
                description,
                "curriculumId":1
            };
            // if (id === 0) {
            fetchCurriculumExperienciaLaboralPOST(datos);
            // } else {
            //     fetchCurriculumExperienciaLaboralPUT(datos);
            // }
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
    }
    const fetchCurriculumExperienciaLaboralPOST = (datos) => {
        postCurriculumClassifier("experence", datos).then(() => {
            history.push(`${CURRICULUM_HABILIDADES}`);

        }).catch((err) => {
            console.log(err)
        }
        )
    }

    return (
        <Form noValidate validated={validated} onSubmit={guardar} >
            <Row>
            <Form.Control  type="hidden" name="curriculumid" value={curriculumId} />
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Cargo laboral</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="text" placeholder="Ingrese el dato" name="input-position" value={position} onChange={(e) => { setPosition(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Empresa</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="text" placeholder="Ingrese el dato"  name="input-company"  value={company} onChange={(e) => { setCompany(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <SelectorAreaTrabajo required name="input-areaWorkId" value={areaWorkId} onChange={(e) => { setAreaWorkId(e.target.value) }} ></SelectorAreaTrabajo>
                <SelectorPais required name="input-countryId" value={countryId} onChange={(e) => { setCountryId(e.target.value) }}></SelectorPais>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Ubicación</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="text" placeholder="Ingrese el dato" name="input-ubication" value={ubication} onChange={(e) => { setUbication(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Fecha de inicio</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="date" placeholder="Ingrese el dato" name="input-dateInit" value={dateInit} onChange={(e) => { setDateInit(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Fecha de termino</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="date" placeholder="Ingrese el dato" name="input-dateFinish" value={dateFinish} onChange={(e) => { setDateFinish(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2" controlId="currentlyHasThePositionCheckBox">
                    <Form.Label column sm="4">Actualmente está trabajando en ese cargo</Form.Label>
                    <Col sm="8">
                        <Form.Check className="mt-2" type="checkbox" label="Sí" name="input-currentlyHasThePosition" checked={currentlyHasThePosition} onChange={(e) => { setCurrentlyHasThePosition(e.target.checked) }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Dependientes (personas a cargo)</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="number" placeholder="Ingrese el dato"  name="input-dependents" value={dependents} onChange={(e) => { setDependents(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Años de experiencia</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="text" placeholder="Ingrese el dato" name="input-experienceYears" value={experienceYears} onChange={(e) => { setExperienceYears(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label >Descripción del cargo</Form.Label>
                    <Col className="m-2">
                        <Form.Control required as="textarea" rows={8} placeholder="Ingrese el dato" name="input-description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
            </Row>
            <Row className="m-2 justify-content-md-end" xs="auto" >
                <Col>
                    <Button id="btn-save" type="submit">Guardar datos</Button>
                </Col>
                <Col>
                    <Link className='btn btn-primary' to={CURRICULUM_HABILIDADES}>Continuar</Link>
                </Col>
            </Row>
        </Form>
    )
}