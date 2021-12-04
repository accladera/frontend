import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { getClassifier } from 'services/SystemServices';

export const SelectorAreaTrabajo = (props) => {
    const [listaAreaTrabajo, setListaAreaTrabajo] = useState([]);

    useEffect(() => {
        fetchListaAreaTrabajo();
    }, []);

    const fetchListaAreaTrabajo = () => {

        getClassifier("area-work").then((data) => {
            setListaAreaTrabajo(data)
        }).catch((err) => {
            console.log(err)
        });


    }
    return (
        <Form.Group as={Row} className="mt-2" controlId="selector-area-trabajo">
            <Form.Label column sm="4">Área de trabajo</Form.Label>
            <Col sm="8">
                <Form.Control as="select" {...props}>
                    <option value="" disabled>Elija el área de trabajo</option>
                    {
                        listaAreaTrabajo.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
            </Col>
        </Form.Group>
    );
}