import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../components/Navbar';

export const HomePage = () =>{

    return (
    
    <>
        <Navbar/>
        <div className='container py-5'>
            <br></br>
          This is the home page
          Sincerely, Jalen lum
        </div>

    </>

    )

}