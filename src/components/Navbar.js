import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Navbar = ()=>{

    return(
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;600&display=swap" rel="stylesheet"></link>

            <div className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:'#2C4230'}}>
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
                        <li className="nav-item">
                        <a href="/lgbtq/" className="nav-link">
                            Home
                        </a>
                        </li>
                       
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Offered Programs
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="/lgbtq/programs/advising.html">Advising</a></li>
                            <li><a class="dropdown-item" href="/lgbtq/programs/events.html">Events</a></li>
                            <li><a class="dropdown-item" href="/lgbtq/programs/rainbow-programs.html">Rainbow Programs</a></li>
                        </ul>
                        </li>
                        
                        <li className="nav-item">
                        <a href="/lgbtq/rights.html" className="nav-link">
                            Rights & Resources
                        </a>
                        </li>
                    
                        <li className="nav-item">
                        <a href="/lgbtq/contact.html" className="nav-link">
                            Contact Us
                        </a>
                        </li>
                    </ul>
                    </div>
                    <span className="navbar-text fw-bold" style={{fontFamily:'Poppins'}}>Lesbian, Gay, Bisexual, Transgender & Queer+ Center</span>
                </div>
            </div>
        </>
    )

}