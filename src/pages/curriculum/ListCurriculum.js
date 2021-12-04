import { JOB_BUSQUEDA_RESULTADO_ITEM } from 'navigation/CONSTANTS';
import React, { useEffect, useState } from 'react'
import { Row, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const ListCurriculum = () => {
    const [listaEmpleos, setListaEmpleos] = useState([]);
    const resultado = useSelector(state => state.listaResultados.lista_trabajos)
    useEffect(() => {
        fetchListaEmpleos();
    }, [])
    const fetchListaEmpleos = () => {
        setListaEmpleos(resultado)
    }
    return (
        <> <Row>
            {listaEmpleos.map(item =>
                <Card key={item.id} border="secondary" style={{ width: '12rem' }} className='m-1'>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>{(item.name) ? item.name : "No definido"}</Card.Title>
                        <Card.Text>
                            <span>{(item.salary) ? item.salary : "No definido"}</span> <br />
                            <span><strong>Descripción:</strong></span> <br />
                            <span>{(item.descripcion) ? item.descripcion : "No definido"}</span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Link className='btn btn-primary m-2' to={JOB_BUSQUEDA_RESULTADO_ITEM(item.id)}>Ver</Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Trabajos ya!</small>
                    </Card.Footer>
                </Card>
            )}
        </Row></>

    );
}