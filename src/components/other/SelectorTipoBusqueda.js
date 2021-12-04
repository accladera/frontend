import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export const SelectorTipoBusqueda = (props) => {
    const [listaTipoBusqueda, setListaTipoBusqueda] = useState([]);

    useEffect(() => {
        fetchListaTipoBusqueda();
    }, []);

    const fetchListaTipoBusqueda = () => {
        var datos = [
            {
                "name": "Palabras exactas",
                "id": 1
            },
            {
                "name": "Contiene todas las palabras",
                "id": 2
            },
            {
                "name": "Contiene algunas las palabras",
                "id": 3
            }

        ]
        setListaTipoBusqueda(datos)
    }

    return (
        <Form.Group as={Row} className="mt-2" controlId="selector-tipo-busqueda">
            <Form.Label column sm="4">Búsqueda</Form.Label>
            <Col sm="8">
                <Form.Control as="select" {...props}>
                    <option value="" disabled>Elige el tipo de búsqueda</option>
                    {
                        listaTipoBusqueda.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
            </Col>
        </Form.Group>
    );
}