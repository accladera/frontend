import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { getClassifier } from 'services/SystemServices';

export const SelectorTipoDocumento = (props) => {
    const [listaTipoDocumento, setListaTipoDocumento] = useState([]);

    useEffect(() => {
        fetchListaTipoDocumento();
    }, []);

    const fetchListaTipoDocumento = () => {
        getClassifier("type-document").then((data) => {
            setListaTipoDocumento(data)
        }).catch((err) => {
            console.log(err)
        });
    }

    return (

        <Form.Group as={Row} className="mt-2" controlId="selector-tipo-documento">
            <Form.Label column sm="4">Tipo de documento</Form.Label>
            <Col sm="8">
                <Form.Control as="select" {...props}>
                    <option value="" disabled>Elija el tipo de documento</option>
                    {
                        listaTipoDocumento.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
            </Col>
        </Form.Group>
    );
}