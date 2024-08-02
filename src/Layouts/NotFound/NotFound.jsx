import React from 'react';
import './NotFound.css'
import error from '../../assets/Imagenes/error.jpg'

export const NotFound = () =>{
    return (
        <>
            <div>
                <div className='h1'>
                    <h1>404 - Page Not Found </h1>
                </div>
                <div className='img'>
                    <img className='error' src={error} alt="Not Found" />
                </div>
            </div>
        </>
    );
};