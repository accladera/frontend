import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { getClassifier } from 'services/SystemServices';

export const SelectorTypeContract = (props) => {
    const [listTypeContract, setListTypeContract] = useState([]);

    useEffect(() => {
        fetchListaTipoContrato();
    }, []);

    const fetchListaTipoContrato = () => {

        getClassifier("type-contract").then((data) => {
            setListTypeContract(data)
        }).catch((err) => {
            console.log(err)
        });

    }

    return (
        <Form.Group as={Row} className="mt-2" controlId="selector-idom-level">
            <Form.Label column sm="4">Tipo de Contrato</Form.Label>
            <Col sm="8">
                <Form.Control as="select" {...props}>
                    <option value="" disabled>Elija el Tipo Contrato</option>
                    {
                        listTypeContract.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
            </Col>
        </Form.Group>
    );
}