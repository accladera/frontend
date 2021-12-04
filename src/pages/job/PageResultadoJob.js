import React from 'react';
import { Row } from 'react-bootstrap';
import { CardResultadoJob } from './CardResultadoJob';
export const PageResultadoJob = (props)=>{
    
    return(
        <Row>
            <CardResultadoJob {...props}></CardResultadoJob>
        </Row>
    )
}