import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { getClassifier } from 'services/SystemServices';

export const SelectorEstadoCivil = (props) => {
    const [listaEstadoCivil, setListaEstadoCivil] = useState([]);

    useEffect(() => {
        fetchListaEstadoCivil();
    }, []);

    const fetchListaEstadoCivil = () => {
        getClassifier("marital-status").then((data) => {
            setListaEstadoCivil(data)
        }).catch((err) => {
            console.log(err)
        });
    }
    return (
        <Form.Group as={Row} className="mt-2" controlId="selector-estado-civil">
            <Form.Label column sm="4">Estado Civil</Form.Label>
            <Col sm="8">
                <Form.Control as="select" {...props}>
                    <option value="" disabled>Elija su estado civil</option>
                    {
                        listaEstadoCivil.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
            </Col>
        </Form.Group>
    );
}