import React from 'react'
import {FaInfoCircle } from 'react-icons/fa';
import AlertContext from '../../context/alert/alertContext';
import { useContext } from 'react';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const {alert} = alertContext;
    return (
       alert !== null && (
           <div className={`alert alert-${alert.type}`}>
               <FaInfoCircle /> {alert.msg}
           </div>
       )
    )
}

export default Alert
