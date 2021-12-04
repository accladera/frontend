import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { getClassifier } from 'services/SystemServices';

export const SelectorCategoria = (props) => {
    const [listaCategoryJob, setListaCategoryJob] = useState([]);

    useEffect(() => {
        fetchListaCategoria();
    }, []);

    const fetchListaCategoria = () => {
        getClassifier("category-job").then((data) => {
            setListaCategoryJob(data)
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <Form.Group as={Row} className="mt-2" controlId="selector-categoria">
            <Form.Label column sm="4">Categoria trabajo</Form.Label>
            <Col sm="8">
                <Form.Control as="select" {...props}>
                    <option value="" disabled>Elija el categoría</option>
                    {
                        listaCategoryJob.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
            </Col>
        </Form.Group>
    );
}