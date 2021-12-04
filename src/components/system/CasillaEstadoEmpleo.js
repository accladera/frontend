import React, { useEffect, useState } from 'react';
import { getClassifierOnly } from 'services/SystemServices';
import PropTypes from 'prop-types';

export const CasillaEstadoEmpleo = ({ props }) => { 
    const [statusJobList, setStatusJobList] = useState([]);
    const [statusJob, setStatusJob] = useState('');
    const id  = props ? props:  0 ;
    useEffect(() => {
        fetchStatusJob(id);
    }, []);

    const fetchStatusJob = (id) => {
        getClassifierOnly("status-jobs",id).then((data)=>{
            setStatusJobList(data);
            setStatusJob(statusJobList[0].name)
        }).catch((err) => {
        console.log(err)
        });

        
    }
    return (
    <span>{statusJob}</span>
    );
}
CasillaEstadoEmpleo.propTypes = {
    props: PropTypes.number,
   

}
