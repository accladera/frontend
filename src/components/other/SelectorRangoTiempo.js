import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export const SelectorRangoTiempo = (props) => {
    const [listaRangoTiempo, setListaRangoTiempo] = useState([]);

    useEffect(() => {
        fetchListaRangoTiempo();
    }, []);

    const fetchListaRangoTiempo = () => {
        var datos = [
            {
                "name": "Cualquier fecha",
                "id": 1
            },
            {
                "name": "Ultimos 30 dias",
                "id": 2
            },
            {
                "name": "Ultimos 7 dias",
                "id": 3
            },
            {
                "name": "Ultimos 3 dias",
                "id": 4
            },
            {
                "name": "Desde ayer",
                "id": 5
            }
        ]
        setListaRangoTiempo(datos)
    }

    return (
        <Form.Group as={Row} className="mt-2" controlId="selector-rango-tiempo">
            <Form.Label column sm="4">Publicado dentro de :</Form.Label>
            <Col sm="8">
                <Form.Control as="select" {...props}>
                    <option value="" disabled>Escoja el rango de tiempo</option>
                    {
                        listaRangoTiempo.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
            </Col>
        </Form.Group>
    );
}