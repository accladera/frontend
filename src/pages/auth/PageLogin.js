import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import React from 'react';
import { FORGOT_PASSWORD, HOME, REGISTRO_CLIENTE, REGISTRO_GERENTE } from "navigation/CONSTANTS";
import Form from "utils/Forms";
import { postLogin } from "services";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {  permisos, sesionIniciada } from 'redux-config/actions';

import { agregarIdentificacion } from "redux-config/actions/identifyAction";

export const PageLogin = () => {

    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    // const headers = { 'content-type': 'application/x-www-form-urlencoded' };
    // const header = { "Access-Control-Allow-Origin": "true" };
    const dispatch = useDispatch();

    
    useEffect(() => {
    limpiarLocalStorage();
    }, [])

    const limpiarLocalStorage = () => {
        localStorage.clear();
    }

    const validateLogin = () => {
        let isValid = true;

        let validator = Form.validator({
            email: {
                value: email,
                isRequired: true,
                isEmail: true
            },
            password: {
                value: password,
                isRequired: true,
                minLength: 5
            }
        });

        if (validator !== null) {
            setValidate({
                validate: validator.errors
            })

            isValid = false
        }
        return isValid;
    }


    // const enviarLogin = (user) => {
    //     Axios.post("https://localhost:44387/api/auth/user/login", user)
    //         .then(response => {
    //             if (response) {
    //                 localStorage.setItem("userId", response.data.userId);
    //                 localStorage.setItem("userToken", response.data.token);
    //                 alert("Login correcto")
    //                 history.push('/');
    //             }
    //         }).catch(error => {
    //             if (error.response) {
    //                 console.log(error.response);
    //                 alert(error.response.data)
    //             }
    //         });
    // }
    
    const enviarLogin = (user) => {
        postLogin(user).then((response) => {
            if (response) {

                localStorage.setItem("userId", response.userId);
                localStorage.setItem("userToken", response.token);
                dispatch(permisos(response.roleId));
                dispatch(sesionIniciada(response.token));
                dispatch(agregarIdentificacion(response.userId));
                
                alert("Login correcto");
                history.push(`${HOME}`);
            }
        }).catch((err) => {
            console.log(err)
        }
        )
    }



    function authenticate(e) {
        e.preventDefault();

        const validate = validateLogin();

        if (validate) {
            setValidate({});
            // setEmail('');
            // setPassword('');
            const user = {
                email,
                password,
            };
            console.log("ANTES DE ENVIAR AL METODO LOGIN AAA", user);
            enviarLogin(user);
        }
    }

    const togglePassword = () => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true)
        }
    }

    return (
        <div className="row g-0 auth-wrapper">
            <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                <div className="auth-background-holder"></div>
                <div className="auth-background-mask"></div>
            </div>

            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                <div className="d-flex flex-column align-content-end">
                    <div className="auth-body mx-auto">
                        {/* <img src="https://trabajoya.co/assets/img/logos/logo-trabajoya2.png" alt="TrabajoYa!" width="500" height="100"  /> */}
                        <p>Inicia sesion con tu cuenta</p>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={authenticate} autoComplete={'off'}>
                                <div className="email mb-3">
                                    <input type="email"
                                        className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                                        id="email"
                                        name="email"
                                        value={email}
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
                                    </div>
                                </div>

                                <div className="password mb-3">
                                    <div className="input-group">
                                        <input type={showPassword ? 'text' : 'password'}
                                            className={`form-control ${validate.validate && validate.validate.password ? 'is-invalid ' : ''}`}
                                            name="password"
                                            id="password"
                                            value={password}
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />

                                        <button type="button" className="btn btn-outline-primary btn-sm" onClick={(e) => togglePassword(e)} ><i className={showPassword ? 'far fa-eye' : 'far fa-eye-slash'} ></i> </button>

                                        <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.password) ? 'd-block' : 'd-none'}`} >
                                            {(validate.validate && validate.validate.password) ? validate.validate.password[0] : ''}
                                        </div>
                                    </div>


                                    <div className="extra mt-3 row justify-content-between">
                                        <div className="col-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="remember" checked={remember} onChange={(e) => setRemember(e.currentTarget.checked)} />
                                                <label className="form-check-label" htmlFor="remember">
                                                    Recuerdame
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="forgot-password text-end">
                                                <Link to={FORGOT_PASSWORD}>Contraseña olvidada?</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Iniciar Sesion</button>
                                </div>
                            </form>

                            <hr />
                            <div className="auth-option text-center pt-2">No tienes una cuenta? <Link className="text-link" to={REGISTRO_CLIENTE} >Registrarse</Link></div>
                            <div className="auth-option text-center pt-2">Eres un gerente? <Link className="text-link" to={REGISTRO_GERENTE} >Registrarse como gerente</Link></div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

