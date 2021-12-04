import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import React from 'react';
import Form from "utils/Forms";
import { LOGIN } from "navigation/CONSTANTS";
import { REGISTRO_EMPRESA } from "navigation/CONSTANTS";
import { postRegisterGerente } from "services";

export const PageRegisterGerente = () => {

    let history = useHistory();
    const [nameUser, setName] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [password, setPassword] = useState('');
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateRegister = () => {
        let isValid = true;

        let validator = Form.validator({
            nameUser: {
                value: nameUser,
                isRequired: true,
            },
            emailUser: {
                value: emailUser,
                isRequired: true,
                isEmail: true
            },
            password: {
                value: password,
                isRequired: true,
                minLength: 5
            },
            
        });

        if (validator !== null) {
            setValidate({
                validate: validator.errors
            })

            isValid = false
        }
        return isValid;
    }

    // const enviarRegistro = (user) => {
    //     Axios.post("https://localhost:44387/api/auth/user/store/gerent", user)
    //         .then(response => {
    //             if (response) {
    //                 alert("Se ha registrado correctamente su usuario gerente")
    //                 localStorage.clear();
    //                 localStorage.setItem("nameCompany", nameBussines);
    //                 localStorage.setItem("emailCompany", emailBussines);
    //                 localStorage.setItem("gerente_id", response.data);
    //                 history.push(REGISTRO_EMPRESA);
    //                 console.log(response);
    //             }
    //         }).catch(error => {
    //             if (error.response.status) {
    //                 console.log(error.response);
    //                 alert(error.response.data)
    //             }
    //         });
    // }
    const enviarRegistro = (user) => {
        postRegisterGerente(user).then((response) => {
            if (response) {
                alert("Se ha registrado correctamente su usuario gerente")
                    localStorage.clear();
                    localStorage.setItem("gerente_id", response);
                    history.push(REGISTRO_EMPRESA);
                    console.log(response);
            }
        }).catch((err) => {
            console.log(err)
        }
        )
    }
    const register = (e) => {
        e.preventDefault();

        const validate = validateRegister();

        if (validate) {
            setValidate({});
            // alert('Se registro correctamente');
            const user = {
                nameUser,
                emailUser,
                password,
                
            };
            console.log("ANTES DE REGISTRAR EL GERENTE AAA", user);
            enviarRegistro(user);
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
                        <p>Crea tu cuenta de gerente</p>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={register} autoComplete={'off'}>

                                <div className="nameUser mb-3">
                                    <input type="text"
                                        className={`form-control ${validate.validate && validate.validate.nameUser ? 'is-invalid ' : ''}`}
                                        id="nameUser"
                                        name="nameUser"
                                        value={nameUser}
                                        placeholder="Name"
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.nameUser) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.nameUser) ? validate.validate.nameUser[0] : ''}
                                    </div>
                                </div>

                                <div className="email mb-3">
                                    <input type="email"
                                        className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                                        id="email"
                                        name="email"
                                        value={emailUser}
                                        placeholder="Email"
                                        onChange={(e) => setEmailUser(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.emailUser) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.emailUser) ? validate.validate.emailUser[0] : ''}
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
                                </div>

                     

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Registrarse</button>
                                </div>
                            </form>

                            <hr />
                            <div className="auth-option text-center pt-2">Ya tienes una cuenta? <Link className="text-link" to={LOGIN} >Iniciar sesion</Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

