import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { getClassifier } from 'services/SystemServices';

export const SelectorTipoContrato = (props) => {
    const [listaTipoContrato, setListaTipoContrato] = useState([]);

    useEffect(() => {
        fetchListaTipoContrato();
    }, []);

    const fetchListaTipoContrato = () => {
        getClassifier("type-contract").then((data) => {
            setListaTipoContrato(data)
        }).catch((err) => {
            console.log(err)
        });
    }

    return (

        <Form.Group as={Row} className="mt-2" controlId="selector-tipo-contrato">
            <Form.Label column sm="4">Tipo Contrato</Form.Label>
            <Col sm="8">
                <Form.Control as="select" {...props}>
                    <option value="" disabled>Elija el tipo de contrato</option>
                    {
                        listaTipoContrato.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
            </Col>
        </Form.Group>
    );
}