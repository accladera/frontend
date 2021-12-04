import { SelectorPais, SelectorTipoContrato } from 'components/system';
import { SelectorCategoria } from 'components/system/SelectorCategoria';
import { CURRICULUM_REFERENCIAS } from 'navigation/CONSTANTS';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postCurriculumClassifier } from 'services';
export const FormInformacionGeneral = () => {
    let history = useHistory();

    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [contractTypeId, setContractTypeId] = useState('');
    const [salary, setSalary] = useState('');
    const [countryReferenceId, setCountryReferenceId] = useState('');
    const [presentation, setPresentation] = useState('');
    const curriculumId = useSelector(state => state.curriculumId.curriculum_id)
    const guardar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() !== false) {
            event.preventDefault();
            event.stopPropagation();
            const datos = {
                title,
                categoryId,
                contractTypeId,
                salary,
                countryReferenceId,
                presentation,
                "curriculumId": 1
            };
            // if (id === 0) {
            fetchCurriculumInformacionGeneralPOST(datos);
            // } else {
            //     fetchCurriculumInformacionGeneralPUT(datos);
            // }
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
    }
    const fetchCurriculumInformacionGeneralPOST = (datos) => {
        postCurriculumClassifier("general", datos).then((res) => {
            console.log(res)
            history.push(`${CURRICULUM_REFERENCIAS}`)
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
                    <Form.Label column sm="4">Título</Form.Label>
                    <Col sm="8">
                        <Form.Control required name="input-title" type="text" placeholder="Ingrese el dato" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <SelectorCategoria required name="input-categoryId" value={categoryId} onChange={(e) => { setCategoryId(e.target.value) }}></SelectorCategoria>
                <SelectorTipoContrato required name="input-contractTypeId" value={contractTypeId} onChange={(e) => { setContractTypeId(e.target.value) }} ></SelectorTipoContrato>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Salario</Form.Label>
                    <Col sm="8">
                        <Form.Control required name="input-salary" type="text" placeholder="Ingrese el dato" value={salary} onChange={(e) => { setSalary(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <SelectorPais required name="input-countryReferenceId" value={countryReferenceId} onChange={(e) => { setCountryReferenceId(e.target.value) }}></SelectorPais>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Presentación</Form.Label>
                    <Col sm="8">
                        <Form.Control required name="input-presentation" type="text" placeholder="Ingrese el dato" value={presentation} onChange={(e) => { setPresentation(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
            </Row>
            <Row className="m-2 justify-content-md-end" xs="auto" >
                <Col>
                    <Button type="submit" id="btn-save">Guardar datos</Button>
                </Col>
                <Col>
                    <Link className='btn btn-primary' to={CURRICULUM_REFERENCIAS}>Continuar</Link>
                </Col>
            </Row>

        </Form>
    )
}