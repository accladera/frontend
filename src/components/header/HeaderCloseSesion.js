import { HOME } from 'navigation/CONSTANTS';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { limpiarCurriculumId, limpiarIdentificacion, sesionCerrada } from 'redux-config/actions';
import { borrarPermisos } from 'redux-config/actions/permissionAction';
export const HeaderCloseSesion = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const cerrarSesion = () => {
        dispatch(sesionCerrada());
        dispatch(limpiarIdentificacion());
        dispatch(borrarPermisos());
        dispatch(limpiarCurriculumId());

        history.push(`${HOME}`);
    }
    return (
        <Nav.Item className="ml-auto" >
            <Nav.Link id="cerrar-navlink" onClick={() => { cerrarSesion() }}>Cerrar sesión</Nav.Link>
        </Nav.Item>
    )
}