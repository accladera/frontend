import React, { useEffect, useState } from "react";
import { getClassifierOnly,getSystemCity } from "services/SystemServices";
import PropTypes from 'prop-types';

export const SelectorClassifierEnables = (props) => {
  const [nameClassifier, setNameClassifier] = useState("");

  const id  = props.value ;
  const classifier  = props.TypeClassifier ;

  useEffect(() => {
    if(classifier!="city")
      fetchClassifier();
    else
      fetchCity();

  }, []);

  const fetchClassifier = () => {
    getClassifierOnly(id,classifier)
      .then((data) => {
        setNameClassifier(data[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchCity = () => {
    debugger; // eslint-disable-line no-debugger

    getSystemCity(id)
      .then((data) => {
        setNameClassifier(data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {nameClassifier}
    </div>
  );
};
SelectorClassifierEnables.propTypes = {
  value: PropTypes.number,
  TypeClassifier : PropTypes.string
};