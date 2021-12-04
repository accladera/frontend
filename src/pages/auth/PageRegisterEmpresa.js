import { useState } from "react";
import { useHistory } from 'react-router-dom';
import React from 'react';
import Form from "utils/Forms";
import { SelectorPais,SelectorCity } from 'components/system';
import { postBusiness } from "services";
import { LOGIN } from "navigation/CONSTANTS";

export const PageRegisterEmpresa = () => {

    let history = useHistory();
    const [name, setName] = useState(localStorage.getItem("nameCompany"));
    const [description, setDescription] = useState('');
    const [emailCompanies, setEmailCompanies] = useState(localStorage.getItem("emailCompany"));
    const [user_id] = useState(localStorage.getItem("gerente_id"));
    const [validate, setValidate] = useState({});
    const [countryId, setCountryId] = useState(0);
    const [cityId, setCityId] = useState(0);

    const validateRegister = () => {
        let isValid = true;

        let validator = Form.validator({
            name: {
                value: name,
                isRequired: true,
            },
            emailCompanies: {
                value: emailCompanies,
                isRequired: true,
                isEmail: true
            },
            description: {
                value: description,
                isRequired: true,
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

    // const enviarRegistro = (company) => {
    //     Axios.post("https://localhost:44329/api/business/company/store", company)
    //         .then(response => {
    //             if (response) {
    //                 alert("Se ha registrado correctamente su empresa")
    //                 localStorage.clear();
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
        postBusiness(user).then((response) => {
            if (response) {
                alert("Se ha registrado correctamente su empresa")
                    localStorage.clear();
                    history.push(`${LOGIN}`);
                    console.log(response);
            }
        }).catch((err) => {
            console.log(err)
        }
        )
    }
    // function traerDatosEmpresa() {
    //     setName(localStorage.getItem("nameCompany"));
    //     setEmailCompanies(localStorage.getItem("emailCompany"));
    //     setUser_id(localStorage.getItem("gerente_id"));
    // }

    const register = (e) => {
        // traerDatosEmpresa();
        e.preventDefault();

        const validate = validateRegister();

        if (validate) {
            setValidate({});
            console.log("NOMBRE EMPRESA: ", (localStorage.getItem("nameCompany")));
            console.log("EMAIL EMPRESA: ", (localStorage.getItem("emailCompany")));
            console.log("ID DE GERENTE: ", (localStorage.getItem("gerente_id")));
            const company = {
                name,
                description,
                emailCompanies,
                user_id,
                countryId,
                cityId,
            };
            console.log("ANTES DE REGISTRAR LA EMPRESA", company);
            enviarRegistro(company);
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
                        <p>Escribe una descripcion para tu empresa</p>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={register} autoComplete={'off'}>

                                
                            <div className="name mb-3">
                                    <input type="text"
                                        className={`form-control ${validate.validate && validate.validate.name ? 'is-invalid ' : ''}`}
                                        id="name"
                                        name="name"
                                        value={name}
                                        placeholder="name"
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.name) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.name) ? validate.validate.name[0] : ''}
                                    </div>
                                </div>

                                <div className="emailCompanies mb-3">
                                    <input type="email"
                                        className={`form-control ${validate.validate && validate.validate.emailCompanies ? 'is-invalid ' : ''}`}
                                        id="emailCompanies"
                                        name="emailCompanies"
                                        value={emailCompanies}
                                        placeholder="emailCompanies"
                                        onChange={(e) => setEmailCompanies(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.emailCompanies) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.emailCompanies) ? validate.validate.emailCompanies[0] : ''}
                                    </div>
                                </div>

                                <div className="description mb-3">
                                    <input type="text"
                                        className={`form-control ${validate.validate && validate.validate.name ? 'is-invalid ' : ''}`}
                                        id="description"
                                        name="description"
                                        value={description}
                                        placeholder="description"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.description) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.description) ? validate.validate.description[0] : ''}
                                    </div>
                                </div>

                                <SelectorPais required value={countryId} onChange={(e)=>{setCountryId(e.target.value)}}></SelectorPais>
                                <SelectorCity parentToChild={countryId} required value={cityId} onChange={(e)=>{setCityId(e.target.value)}}></SelectorCity>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Registrar empresa</button>
                                </div>
                            </form>

                            <hr />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

