import { SelectorNivelEstudio, SelectorPais } from 'components/system';
import { CURRICULUM_IDIOMAS } from 'navigation/CONSTANTS';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postCurriculumClassifier } from 'services';
export const FormEducacion = () => {
    let history = useHistory();

    const [validated, setValidated] = useState(false);
    const [school, setSchool] = useState('');
    const [levelStudyIdSchool, setLevelStudyIdSchool] = useState('');
    const [countryIdSchool, setCountryIdSchool] = useState('');
    const [init, setInit] = useState('');
    const [finish, setFinish] = useState('');
    const [currentlyStudyingHere, setCurrentlyStudyingHere] = useState(false);
    const [university, setUniversity] = useState('');
    const [semester, setSemester] = useState('');
    const [levelStudyIdUniversity, setLevelStudyIdUniversity] = useState('');
    const [countryIdUniversity, setCountryIdUniversity] = useState('');
    const curriculumId = useSelector(state => state.curriculumId.curriculum_id)
    const guardar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() !== false) {
            event.preventDefault();
            event.stopPropagation();
            const datos = {
                school,
                levelStudyIdSchool,
                countryIdSchool,
                init,
                finish,
                currentlyStudyingHere,
                university,
                semester,
                levelStudyIdUniversity,
                countryIdUniversity,
                
                "curriculumId": 1
            };
            // if (id === 0) {
            fetchCurriculumEducacionPOST(datos);
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
    const fetchCurriculumEducacionPOST = (datos) => {
        postCurriculumClassifier("studies", datos).then((res) => {
            console.log(res)
            history.push(`${CURRICULUM_IDIOMAS}`)
        }).catch((err) => {
            console.log(err.data)
        }
        )
    }
    return (
        <Form noValidate validated={validated} onSubmit={guardar} >
            <Row>
                <fieldset>
                    <legend><strong>Educación Secundaria/Colegio</strong></legend>
                    <Form.Control  type="hidden" name="curriculumid" value={curriculumId} />

                    <Form.Group as={Row} className="mt-2">
                        <Form.Label column sm="4">Escuela</Form.Label>
                        <Col sm="8">
                            <Form.Control required name="input-school" type="text" placeholder="Ingrese el dato" value={school} onChange={(e) => { setSchool(e.target.value) }} />
                            <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <SelectorNivelEstudio required name="input-levelStudyIdSchool" value={levelStudyIdSchool} onChange={(e) => { setLevelStudyIdSchool(e.target.value) }} ></SelectorNivelEstudio>
                    <SelectorPais required name="input-countryIdSchool" value={countryIdSchool} onChange={(e) => { setCountryIdSchool(e.target.value) }}></SelectorPais>
                    <Form.Group as={Row} className="mt-2">
                        <Form.Label column sm="4">Fecha de inicio</Form.Label>
                        <Col sm="8">
                            <Form.Control required name="input-init" type="date" value={init} onChange={(e) => { setInit(e.target.value) }} />
                            <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-2">
                        <Form.Label column sm="4">Fecha de termino</Form.Label>
                        <Col sm="8">
                            <Form.Control required name="input-finish" type="date" value={finish} onChange={(e) => { setFinish(e.target.value) }} />
                            <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-2" controlId="currentlyStudyingHereCheckBox">
                        <Form.Label column sm="4">Actualmente estudia aquí</Form.Label>
                        <Col sm="8">
                            <Form.Check type="checkbox" label="Sí" checked={currentlyStudyingHere} onChange={(e) => { setCurrentlyStudyingHere(e.target.value) }} />
                        </Col>
                    </Form.Group>
                </fieldset>
                <fieldset>
                    <legend><strong>Educación Universitaria, Técnica, Cursos, Postgrados, Seminarios</strong></legend>
                    <Form.Group as={Row} className="mt-2">
                        <Form.Label column sm="4">Universidad</Form.Label>
                        <Col sm="8">
                            <Form.Control required name="input-university" type="text" placeholder="Ingrese el dato" value={university} onChange={(e) => { setUniversity(e.target.value) }} />
                            <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mt-2">
                        <Form.Label column sm="4">Semestre</Form.Label>
                        <Col sm="8">
                            <Form.Control required name="input-semester" type="text" placeholder="Ingrese el dato" value={semester} onChange={(e) => { setSemester(e.target.value) }} />
                            <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <SelectorNivelEstudio required name="input-levelStudyIdUniversity" value={levelStudyIdUniversity} onChange={(e) => { setLevelStudyIdUniversity(e.target.value) }} ></SelectorNivelEstudio>
                    <SelectorPais required name="input-countryIdUniversity" value={countryIdUniversity} onChange={(e) => { setCountryIdUniversity(e.target.value) }}></SelectorPais>
                </fieldset>
            </Row>
            <Row className="m-2 justify-content-md-end" xs="auto" >
                <Col>
                    <Button type="submit" id="btn-save">Guardar datos</Button>
                </Col>
                <Col>
                    <Link className='btn btn-primary' to={CURRICULUM_IDIOMAS}>Continuar</Link>
                </Col>
            </Row>

        </Form>
    )
}