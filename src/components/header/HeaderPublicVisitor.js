import { HOME, LOGIN, REGISTRO_CLIENTE } from 'navigation/CONSTANTS';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const HeaderPublicVisitor = ()=>{
return(
    <Nav className="mr-auto">
            <Link to={HOME} className='nav-link'> Inicio</Link>
            <Link to={LOGIN} className='nav-link'> Iniciar sesión</Link>
            <Link to={REGISTRO_CLIENTE} className='nav-link'> Crear cuenta</Link>
            
    </Nav>
)
}