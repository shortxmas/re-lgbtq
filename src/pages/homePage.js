import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const HomePage = () =>{

    return (
    
    <>
        <Navbar/>
        <div className='container py-5'>
        <Footer/>
        </div>

    </>

    )

}