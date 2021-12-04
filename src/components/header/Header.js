import { HOME } from 'navigation/CONSTANTS';
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import imagenes from 'utils/Images';
import { HeaderCloseSesion } from './HeaderCloseSesion';
import { HeaderPublicVisitor } from './HeaderPublicVisitor';
import { HeaderUserClient } from './HeaderUserClient';

export const Header = () => {
    const typeUser = useSelector(state => state.permisos.type_user)
    const token = useSelector(state => state.sesion.access_token)

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >
                <Link to={HOME} className='navbar-brand'>
                    <img src={imagenes[0].img} width='80em' alt={imagenes[0].alt} className='logo logo-menu' />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {(token) ? (
                    <>
                        {(typeUser == 2) ? (
                        <HeaderUserClient></HeaderUserClient>
                        ):(
                        <></>)
                        }
                    <HeaderCloseSesion></HeaderCloseSesion>
                    </>
                ) : (
                    <HeaderPublicVisitor></HeaderPublicVisitor>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
}
