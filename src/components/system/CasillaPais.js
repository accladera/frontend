import React, { useEffect, useState } from 'react';
import { getSystemCountry } from 'services/SystemServices';
import PropTypes from 'prop-types';

export const CasillaPais= ({ props }) => {
   
    const [countryList, setCountryList] = useState([]);
    const id  = props ? props:  0 ;
    useEffect(() => {
        fetchCountry(id);
    }, []);

    const fetchCountry = (id) => {
        getSystemCountry(id).then((data)=>{
            setCountryList(data)
        }).catch((err) => {
           console.log(err)
        });

        
    }
    return (
        <>{countryList.map(item=>
            <span key={item.id}>{item.name}  </span>
        )}       
        </>
    );
}
CasillaPais.propTypes = {
    props: PropTypes.number,
   

}
