import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { getCity } from 'services/SystemServices';

export const SelectorCity = (props) => {
    const [listaCiudad, setListaCiudad] = useState([]);





    useEffect(() => {
        fetchListaCiudad();
    }, []);

    const fetchListaCiudad = () => {
        getCity(1).then((data) => {
            setListaCiudad(data)
        }).catch((err) => {
            console.log(err)
        });

    }

    return (
        <Form.Group as={Row} className="mt-2" controlId="selector-pais">
            <Form.Label column sm="4">Ciudad</Form.Label>
            <Col sm="8">
                <Form.Control as="select" {...props}>
                    <option value="" disabled>Elija Ciudad</option>
                    {
                        listaCiudad.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
            </Col>
        </Form.Group>
    );
}

