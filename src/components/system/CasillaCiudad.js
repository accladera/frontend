import React, { useEffect, useState } from 'react';
import { getSystemCity } from 'services/SystemServices';
import PropTypes from 'prop-types';

export const CasillaCiudad = ({ props }) => {
   
    const [cityName, setCityName] = useState([]);
    const id  = props ? props:  0 ;
    useEffect(() => {
        fetchCity(id);
    }, []);

    const fetchCity = (id) => {
        getSystemCity(id).then((data)=>{
            setCityName(data.name)
        }).catch((err) => {
           console.log(err)
        });

        
    }
    return (     
            <span >{cityName}  </span>  
    );
}
CasillaCiudad.propTypes = {
    props: PropTypes.number
   

}
