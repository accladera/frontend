import { CURRICULUM_INDICE, HOME, JOB_BUSQUEDA } from 'navigation/CONSTANTS';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const HeaderUserClient = ()=>{
return(
    <Nav className="mr-auto">
            <Link to={HOME} className='nav-link'> Inicio</Link>
            <Link to={CURRICULUM_INDICE} className='nav-link'>Crear curriculum</Link>
            <Link to={JOB_BUSQUEDA} className='nav-link'>Busqueda de empleo</Link>
            
    </Nav>
)
}