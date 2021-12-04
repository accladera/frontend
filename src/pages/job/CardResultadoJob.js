
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { getJobOnly } from 'services/BussinesService';
import PropTypes from 'prop-types';
import { CasillaCiudad, CasillaEmpresa, CasillaEstadoEmpleo, CasillaPais, CasillaTipoContrato } from 'components/system';



export const CardResultadoJob = ({ match }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');

    const [statusJobId, setStatusJobId] = useState('');
    const [companyId, setCompanyId] = useState('');
    const [typeContractId, setTypeContractId] = useState('');
    const [cityId, setCityId] = useState('');
    const [cityCountryId, setCityCountryId] = useState('');
    
    

    var propsStatusJob = {"props":statusJobId};
    var propsCompany ={"props":companyId};
    var propsTypeContract ={"props":typeContractId};
    var propsCity={"props":cityId};
    var propsCountry={"props":cityCountryId};
    
    const { id } = match ? match.params : { id: 0 };

    useEffect(() => {
        loadJob(id);
    }, [])
    const loadJob = (id) => {
        getJobOnly(id).then(res => {
            console.log(res)
            setName(res.name);
            setDescription(res.description);
            setSalary(res.salary);
            setStatusJobId(res.statusJobs_id);
            setCityId(res.city_id);
            setCityCountryId(res.city_Country);
            setCompanyId(res.companyId);
            setTypeContractId(res.typeContractId);
        }).catch((err) => {
            console.log(err)
        })
    }
    return (

        <Card border="secondary" style={{ width: '25rem' }} className='m-1'>
            <Card.Header><CasillaEstadoEmpleo {...propsStatusJob} ></CasillaEstadoEmpleo></Card.Header>
            <Card.Body>
                <Card.Title>{name} - {salary} $</Card.Title>
                <Card.Text>
                    <strong>Empresa: </strong><CasillaEmpresa  {...propsCompany} ></CasillaEmpresa><br />
                    <strong>Salario: </strong> {salary} $<br />
                    <strong>Descripcion: </strong> {description}<br />
                    <strong>Estado: </strong><CasillaEstadoEmpleo {...propsStatusJob} ></CasillaEstadoEmpleo><br />
                    <strong>Tipo de contrato:</strong><CasillaTipoContrato {...propsTypeContract} ></CasillaTipoContrato><br />
                    <strong>Ciudad: </strong><CasillaCiudad {...propsCity} ></CasillaCiudad><br />
                    <strong>Pais: </strong><CasillaPais {...propsCountry} ></CasillaPais><br />
                    
                </Card.Text>
            </Card.Body>

            <Card.Footer>
                <small className="text-muted">Trabajos ya!</small>
            </Card.Footer>
        </Card>


    );
}
CardResultadoJob.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.array
    })

}