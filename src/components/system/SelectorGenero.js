import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { getClassifier } from 'services/SystemServices';

export const SelectorGenero = (props) => {
    const [listaGenero, setListaGenero] = useState([]);

    useEffect(() => {
        fetchListaGenero();
    }, []);

    const fetchListaGenero = () => {
        getClassifier("gender").then((data) => {
            setListaGenero(data)
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <Form.Group as={Row} className="mt-2" controlId="selector-genero">
            <Form.Label column sm="4">Género</Form.Label>
            <Col sm="8">
                <Form.Control as="select" {...props}>
                    <option value="" disabled>Elija el género</option>
                    {
                        listaGenero.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
            </Col>
        </Form.Group>
    );
}