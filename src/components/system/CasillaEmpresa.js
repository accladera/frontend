import React, { useEffect, useState } from 'react';
import { getBussinesOnly } from 'services/BussinesService';
import PropTypes from 'prop-types';

export const CasillaEmpresa = ({ props }) => {
    const [companyName, setCompanyName] = useState('');

    const id = props ? props : 0;
    useEffect(() => {
        fetchStatusJob(id);
    }, []);

    const fetchStatusJob = (id) => {
        getBussinesOnly(id).then((data) => {
            setCompanyName(data.name)
        }).catch((err) => {
            console.log(err)
        });


    }
    return (    
            <span>{companyName}  </span>     
    );
}
CasillaEmpresa.propTypes = {
    props: PropTypes.number


}
