import React, { useEffect, useState } from 'react';
import { Col,Form, Row } from 'react-bootstrap';
import { getClassifier } from 'services/SystemServices';

export const SelectorNivelEstudio = (props) => {
    const [listaNivelEstudio, setListaNivelEstudio] = useState([]);

    useEffect(() => {
        fetchListaNivelEstudio();
    }, []);

    const fetchListaNivelEstudio = () => {
        getClassifier("level-study").then((data)=>{
            setListaNivelEstudio(data)
        }).catch((err) => {
           console.log(err)
        });
    }

    return (
        <Form.Group as={Row} className="mt-2" controlId="selector-nivel-estudio">
            <Form.Label column sm="4">Grado/Nivel de estudio</Form.Label>
            <Col sm="8">
            <Form.Control as="select" {...props}>
                    <option value="" disabled>Elija el grado de estudio</option>
                    {
                        listaNivelEstudio.map(item =>
                            <option key={"item-" + item.id} value={item.id} > {item.name}  </option>
                        )
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid"> Campo requerido.</Form.Control.Feedback>
                 
            </Col>
              
        </Form.Group>
            );
}