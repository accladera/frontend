import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export const SelectorRangoSueldo = (props) => {
    const [listaRangoSueldo, setListaRangoSueldo] = useState([]);

    useEffect(() => {
        fetchListaRangoSueldo();
    }, []);

    const fetchListaRangoSueldo = () => {
        var datos = [
            {
                "name": "Cualquier rango de sueldo",
                "id": 1
            },
            {
                "name": "Mayores a BS. 20.000",
                "id": 2
            },
            {
                "name": "Negociable",
                "id": 3
            },
            {
                "name": "Dependiendo de la experiencia",
                "id": 4
            },
            {
                "name": "No declarado",
                "id": 5
            },
            {
                "name": "De Bs. 2.164 a Bs. 2.999",
                "id": 6
            },
            {
                "name": "De Bs. 3.000 a Bs. 3.999",
                "id": 7
            },
            {
                "name": "De Bs. 4.000 a Bs. 4.999",
                "id": 8
            },
            {
                "name": "De Bs. 5.000 a Bs. 5.999",
                "id": 9
            },
            {
                "name": "De Bs. 6.000 a Bs. 6.999",
                "id": 10
            },
            {
                "name": "De Bs. 7.000 a Bs. 7.999",
                "id": 11
            },

        ]
        setListaRangoSueldo(datos)
    }

    return (
        <Form.Group as={Row} className="mt-2" controlId="selector-rango-sueldo">
            <Form.Label column sm="4">Rango de Sueldo</Form.Label>
            <Col sm="8">
                <Form.Control as="select" {...props}>
                    <option value="" disabled>Escoja el rango</option>
                    {
                        listaRangoSueldo.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
            </Col>
        </Form.Group>
    );
}