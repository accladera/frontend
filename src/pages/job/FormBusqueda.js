import { SelectorRangoSueldo, SelectorRangoTiempo, SelectorTipoBusqueda } from 'components/other';
import { SelectorAreaTrabajo, SelectorCity, SelectorPais, SelectorTipoContrato } from 'components/system';
import { JOB_BUSQUEDA_RESULTADO } from 'navigation/CONSTANTS';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { agregarListaTrabajosResultados } from 'redux-config/actions';
import { getAllJobs } from 'services';
export const FormBusqueda = () => {
    const [validated, setValidated] = useState(false);
    const [keyWords, setkeyWords] = useState('');
    const [typeSearch, setTypeSearch] = useState('');//PALABRAS EXACTAS ... etc
    const [searchByTittle, setSearchByTittle] = useState(false);
    const [category, setCategory] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [salaryRange, setSalaryRange] = useState('');
    const [contractType, setContractType] = useState('');
    const [rankOfTime, seTrankOfTime] = useState('');
    const [isActive, setIsActive] = useState(false);
    let history = useHistory();
    const dispatch = useDispatch();
    const setUrlParams = () => {

    }
    const enviar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() !== false) {
            event.preventDefault();
            event.stopPropagation();
            setUrlParams()
            const datos = {
                keyWords,
                typeSearch,
                searchByTittle,
                category,
                country,
                city,
                salaryRange,
                contractType,
                rankOfTime,
                isActive
            };
            fetchBusquedaGET(datos);

        }
        else {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
    }
    const fetchBusquedaGET = (datos) => {
        console.log(datos);
        getAllJobs().then(res => {

            dispatch(agregarListaTrabajosResultados(res));
            history.push(`${JOB_BUSQUEDA_RESULTADO}`)
        }).catch((err) => {
            console.log(err)
        }
        )

    }
    return (
        <Form noValidate validated={validated} onSubmit={enviar} >
            <Row>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Palabras clave</Form.Label>
                    <Col sm="8">
                        <Form.Control type="text" placeholder="Ingrese el dato" value={keyWords} onChange={(e) => { setkeyWords(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <SelectorTipoBusqueda value={typeSearch} onChange={(e) => { setTypeSearch(e.target.value) }}></SelectorTipoBusqueda>
                <Form.Group as={Row} className="mt-2" controlId="searchByTitleCheckBox">
                    <Form.Label column sm="4">Buscar empleo sólo por título</Form.Label>
                    <Col sm="8">
                        <Form.Check type="checkbox" label="Sí" value={searchByTittle} onChange={(e) => { setSearchByTittle(e.target.value) }} />

                    </Col>
                </Form.Group>
                <SelectorAreaTrabajo value={category} onChange={(e) => { setCategory(e.target.value) }} ></SelectorAreaTrabajo>
                <SelectorPais value={country} onChange={(e) => { setCountry(e.target.value) }} ></SelectorPais>
                <SelectorCity value={city} onChange={(e) => { setCity(e.target.value); console.log(city) }} ></SelectorCity>
                <SelectorRangoSueldo value={salaryRange} onChange={(e) => { setSalaryRange(e.target.value) }}></SelectorRangoSueldo>
                <SelectorTipoContrato value={contractType} onChange={(e) => { setContractType(e.target.value) }}></SelectorTipoContrato>
                <SelectorRangoTiempo value={rankOfTime} onChange={(e) => { seTrankOfTime(e.target.value) }} ></SelectorRangoTiempo>
                <Form.Group as={Row} className="mt-2" controlId="isActiveCheckBox">
                    <Form.Label column sm="4">Mostrar solo empleos vigentes</Form.Label>
                    <Col sm="8">
                        <Form.Check type="checkbox" label="Sí" value={isActive} onChange={(e) => { setIsActive(e.target.value) }} />
                    </Col>
                </Form.Group>
            </Row>
            <Row className="m-1 justify-content-md-end" xs="auto" >
                <Col>
                    <Button type="submit" size="lg">Buscar</Button>
                </Col>
            </Row>

        </Form>
    )
}