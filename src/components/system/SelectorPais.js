import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { getClassifier } from 'services/SystemServices';

export const SelectorPais = (props) => {
    const [listaPais, setListaPais] = useState([]);

    useEffect(() => {
        fetchListaPais();
    }, []);

    const fetchListaPais = () => {
        getClassifier("country").then((data) => {
            setListaPais(data)
        }).catch((err) => {
            console.log(err)
        });

    }

    return (
        <Form.Group as={Row} className="mt-2" controlId="selector-pais">
            <Form.Label column sm="4">País</Form.Label>
            <Col sm="8">
                <Form.Control as="select" {...props}>
                    <option value="" disabled>Elija el país</option>
                    {
                        listaPais.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
            </Col>

            <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
        </Form.Group>
    );
}