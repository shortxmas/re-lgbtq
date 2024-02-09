import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Navbar = ()=>{

    return(
        <>
            {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'></link>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;600&display=swap" rel="stylesheet"></link> */}

            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <   link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>

            <div className="navbar fixed-top navbar-expand-xl navbar-dark" style={{backgroundColor:'#2C4230'}}>
                <div className="container">
                    <a href="/lgbtq/" className="navbar-brand">
                     <img src="../../assets/logowhite.png" width="94" height="65" className="d-inline-block align-top" alt=""></img>
                    </a>
                    <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#nav"
                    aria-controls="nav"
                    aria-label="Expand Navigation"
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav navbar-right">
                        <li className="nav-item" style={{fontFamily:'Poppins'}}>
                        <a href="/lgbtq/" className="nav-link">
                            Home
                        </a>
                        </li>
                       
                        <li className="nav-item dropdown" style={{fontFamily:'Poppins'}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Offered Programs
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{fontFamily:'Poppins'}}>
                            <li ><a className="dropdown-item" href="/lgbtq/programs/advising.html">Advising</a></li>
                            <li><a className="dropdown-item" href="/lgbtq/programs/events.html">Events</a></li>
                            <li><a className="dropdown-item" href="/lgbtq/programs/rainbow-programs.html">Rainbow Programs</a></li>
                        </ul>
                        </li>

                        <li className="nav-item dropdown" style={{fontFamily:'Poppins'}}>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Rights & Resources
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{fontFamily:'Poppins'}}>
                            <li ><a className="dropdown-item" href="/lgbtq/resources.html">Resources</a></li>
                            <li><a className="dropdown-item" href="/lgbtq/rights.html">Rights</a></li>
                            
                        </ul>
                        </li>
                    
                        <li className="nav-item" style={{fontFamily:'Poppins'}}>
                        <a href="/lgbtq/contact.html" className="nav-link">
                            Contact Us
                        </a>
                        </li>
                    </ul>
                    </div>
                    <span className="navbar-text fw-bold" style={{fontFamily:'Poppins', color:'whitesmoke'}}>Lesbian, Gay, Bisexual, Transgender & Queer+ Center</span>
                </div>
            </div>
        </>
    )

}