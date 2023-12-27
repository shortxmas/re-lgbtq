import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../components/Navbar';

export const HomePage = () =>{

    return (
    
    <>
        <Navbar/>
        <div className='container py-5'>
            Home page
        </div>

    </>

    )

}