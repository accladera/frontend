import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { getClassifier } from 'services/SystemServices';

export const SelectorIdioma = (props) => {
    const [listaIdioma, setListaIdioma] = useState([]);

    useEffect(() => {
        fetchListaIdioma();
    }, []);

    const fetchListaIdioma = () => {
        getClassifier("idoms").then((data) => {
            setListaIdioma(data)
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <Form.Group as={Row} className="mt-2" controlId="selector-idioma">
            <Form.Label column sm="4">Idioma</Form.Label>
            <Col sm="8">
                <Form.Control as="select" {...props}>
                    <option value="" disabled>Elija el idioma</option>
                    {
                        listaIdioma.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
            </Col>
        </Form.Group>
    );
}