import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import React from 'react';
import Form from "utils/Forms";
import { LOGIN } from "navigation/CONSTANTS";
import { postRegister,postRegisterClientProfiles } from "services";

export const PageRegisterCliente = () => {

    let history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate] = useState('2021-11-14T23:53:40.807Z');
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateRegister = () => {
        let isValid = true;

        let validator = Form.validator({
            name: {
                value: name,
                isRequired: true,
            },
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

    // const enviarRegistro = (user) => {
    //     Axios.post("https://localhost:44387/api/auth/user/store/client", user)
    //         .then(response => {
    //             if (response) {
    //                 alert("Sus datos se registraron correctamente")
    //                 history.push('/login');
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
        postRegister(user).then((response) => {

            if (response) {
                const profiles = {
                    userId:response,
                    name:name
                };
                postRegisterClientProfiles(profiles).then((response) => {
                    alert("Sus datos se registraron correctamente")
                    history.push(`${LOGIN}`);
                    console.log(response);
                }).catch((err) => {
                    console.log(err)
                })
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
            // setName('');
            // setEmail('');
            // setPassword('');
            // alert('Se registro correctamente');
            const user = {
                email,
                name,
                password,
                birthDate,
            };
            console.log("ANTES DE ENVIAR AL METODO REGISTRO AAA", user);
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
                        <p>Crea tu cuenta de cliente</p>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={register} autoComplete={'off'}>

                                <div className="name mb-3">
                                    <input type="text"
                                        className={`form-control ${validate.validate && validate.validate.name ? 'is-invalid ' : ''}`}
                                        id="name"
                                        name="name"
                                        value={name}
                                        placeholder="Name"
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.name) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.name) ? validate.validate.name[0] : ''}
                                    </div>
                                </div>

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