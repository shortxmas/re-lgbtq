import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Navbar = ()=>{

    return(
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a href="/" className="navbar-brand">
                     <img src="assets/logowhite.png" width="116" height="80" className="d-inline-block align-top" alt=""></img>
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
                        <a href="/" className="nav-link">
                            Home
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="/safe-zone.html" className="nav-link">
                            Safe Zone
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="/programs.html" className="nav-link">
                            Student Programs
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="/rights.html" className="nav-link">
                            Rights
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="/resources.html" className="nav-link">
                            Resources
                        </a>
                        </li>
                        <li className="nav-item">
                        <a href="/contact.html" className="nav-link">
                            Contact Us
                        </a>
                        </li>
                    </ul>
                    </div>
                    <span className="navbar-text">Lesbian, Gay, Bisexual, Transgender & Queer+ LGBTQ+ Center</span>
                </div>
            </div>
        </>
    )

}