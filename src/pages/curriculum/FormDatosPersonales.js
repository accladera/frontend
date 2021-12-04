import { SelectorEstadoCivil, SelectorGenero, SelectorTipoDocumento } from 'components/system';
import { CURRICULUM_EXPERIENCIA_LABORAL } from 'navigation/CONSTANTS';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postCurriculum } from 'services/CurriculumService';
import { useDispatch, useSelector } from 'react-redux';
import { agregarCurriculumId } from 'redux-config/actions';


export const FormDatosPersonales = ({ match }) => {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [phone, setPhone] = useState('');
    const [nationality, setNationality] = useState('');
    const [typeDocumentId, setTypeDocumentId] = useState('');
    const [documentNumber, setDocumentNumber] = useState('');
    const [birthday, setBirthday] = useState('');
    const [genderId, setGenderId] = useState('');
    const [maritalStatusId, setMaritalStatusId] = useState('');
   
    let history = useHistory();
    const dispatch = useDispatch();
    const clienteId = useSelector(state => state.identificar.id_user);
    const { id } = (match) ? match.params : { id: 0 };

    const guardar = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() !== false) {
            event.preventDefault();
            event.stopPropagation();
            const datos = {
                name,
                lastName,
                cellphone,
                phone,
                nationality,
                typeDocumentId,
                documentNumber,
                birthday,
                genderId,
                maritalStatusId,
                "clienteId":clienteId
            };
            // if (id === 0) {
            fetchCurriculumPOST(datos);
            // } else {
            //     fetchCurriculumPUT(datos);
            // }
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
    }
    const fetchCurriculumPOST = (datos) => {
        console.log("props", id);
        postCurriculum(datos).then((res) => {
            dispatch(agregarCurriculumId(res));
            console.log(res)
            history.push(`${CURRICULUM_EXPERIENCIA_LABORAL}`)
        }).catch((err) => {
            console.log(err.data)
        }
        )
    }
    // const fetchCurriculumPUT = (datos) => {
    //     console.log(datos,id)
    // }

    return (
        <Form noValidate validated={validated} onSubmit={guardar} >
            <Row>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Nombre(s)</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="text" placeholder="Ingrese datos" name="input-name" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Apellido(s)</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="text"  placeholder="Ingrese datos" name="input-lastname" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Teléfono Celular</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="number" placeholder="Ingrese datos" name="input-cellphone" value={cellphone} onChange={(e) => { setCellphone(e.target.value.toString()) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Teléfono Fijo</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="number" placeholder="Ingrese datos" name="input-phone" value={phone} onChange={(e) => { setPhone(e.target.value.toString()) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Nacionalidad</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="text" placeholder="Ingrese datos" name="input-nationality" value={nationality} onChange={(e) => { setNationality(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <SelectorTipoDocumento required name="input-typeDocumentId" value={typeDocumentId} onChange={(e) => { setTypeDocumentId(e.target.value) }}></SelectorTipoDocumento>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Número de Documento</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="number" placeholder="Ingrese datos"  name="input-documentNumber" value={documentNumber} onChange={(e) => { setDocumentNumber(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-2">
                    <Form.Label column sm="4">Fecha de Nacimiento</Form.Label>
                    <Col sm="8">
                        <Form.Control required type="date" placeholder="Ingrese datos" name="input-birthday" value={birthday} onChange={(e) => { setBirthday(e.target.value) }} />
                        <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <SelectorGenero required name="input-genderId" value={genderId} onChange={(e) => { setGenderId(e.target.value) }}></SelectorGenero>
                <SelectorEstadoCivil required name="input-maritalStatusId" value={maritalStatusId} onChange={(e) => setMaritalStatusId(e.target.value)} ></SelectorEstadoCivil>

            </Row>
            <Row className="m-2 justify-content-md-end" xs="auto" >
                <Col>
                <Button type="submit" id="btn-save" >Guardar datos</Button>
                </Col>
                {/* <Col>
                <Link className='btn btn-primary'  to={CURRICULUM_EXPERIENCIA_LABORAL}>Continuar</Link>
                </Col> */}
            </Row>
        </Form>
    )
}
FormDatosPersonales.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.array
    })
}