import React, { useEffect, useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { getClassifier } from 'services/SystemServices';

export const SelectorNivelIdioma = (props) => {
    const [listaNivelIdioma, setListaNivelIdioma] = useState([]);

    useEffect(() => {
        fetchListaNivelEstudio();
    }, []);

    const fetchListaNivelEstudio = () => {

        getClassifier("level-idom").then((data) => {
            setListaNivelIdioma(data)
        }).catch((err) => {
            console.log(err)
        });

    }

    return (
        //<Form.Group as={Row} className="mt-2" controlId="selector-idom-level">
            <Col sm="8">
                <Form.Control as="select" {...props}>
                    <option value="" disabled>Elija el nivel</option>
                    {
                        listaNivelIdioma.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
            <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
            </Col>
        //</Form.Group>
    );
}