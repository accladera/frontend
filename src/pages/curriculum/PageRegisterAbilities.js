import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FormHabilidades } from './FormHabilidades';
export const PageRegisterAbilities = () => {
    return (
        <>
            <Row className="mt-2 justify-content-md" id="PageRegisterAbilities">
                <Col md={{ span: 9, offset: 2 }}>
                    <h1 id="PageRegisterAbilitiesTitle" >Habilidades</h1>
                    <p>Aquí puedes agregar conocimientos específicos como ser paquetes de software (Microsoft Office) o algún otro tipo de experiencia relevante que no se muestre en tu formación académica y profesional.</p>
                    <FormHabilidades></FormHabilidades>
                </Col>
            </Row>
        </>
    )
}