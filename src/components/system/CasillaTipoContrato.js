import React, { useEffect, useState } from 'react';
import { getClassifierOnly } from 'services/SystemServices';
import PropTypes from 'prop-types';

export const CasillaTipoContrato = ({ props }) => {
   
    const [typeContractList, setTypeContractList] = useState([]);
    const id  = props ? props:  0 ;
    useEffect(() => {
        fetchStatusJob(id);
    }, []);

    const fetchStatusJob = (id) => {
        getClassifierOnly("type-contract",id).then((data)=>{
            setTypeContractList(data)
        }).catch((err) => {
           console.log(err)
        });

        
    }
    return (
        <>{typeContractList.map(item=>
            <span key={item.id}>{item.name}  </span>
        )}       
        </>
    );
}
CasillaTipoContrato.propTypes = {
    props: PropTypes.number,
   

}
