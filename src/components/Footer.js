import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Footer = ()=>{

    return(
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <footer className="text-center text-lg-start text-white bg-dark">
                <section className="d-flex justify-content-between p-4" style={{backgroundColor: '#2C4230'}}>
                
                    <div className="me-5">
                        <span>Get connected with us on our social networks:</span>
                    </div>

                    <div>
                        <a href="https://www.instagram.com/uhmlgbtqcenter/" target="_blank" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Newsletter</h6>
                                <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{width: 60, height: 2, backgroundColor: '#7c4dff'}}/>
                                <p>
                                    Want to know what we're up to? Sign up for the newsletter!
                                </p>
                                <form className="form">
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{}}/>
                                    </div>
                                    <br />
                                    <button type="submit" class="btn text-white" style={{backgroundColor:"#2C4230", borderRadius: 100}}>Submit</button>
                                </form>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold">Address</h6>
                                <hr class="mb-2 mt-0 d-inline-block mx-auto" style={{width:60, height:2, backgroundColor:"#7c4dff"}} />
                                <p><i className="fa fa-home mr-3"></i> University of Hawai&#699;i</p>
                                <p>2600 Campus Rd., QLCSS #211</p>
                                <p>Honolulu, HI 96822, US</p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{width: 60, height: 2, backgroundColor: '#7c4dff'}} />
                                <p><i className="fa fa-envelope mr-3"></i> lgbtq@hawaii.edu</p>
                                <p><i className="fa fa-phone mr-3"></i> + 1 (808) 956-9250</p>
                            </div>

                        </div>
                    </div>
                </section>
                <div class="text-center p-3" style={{backgroundColor: '#2C4230'}}>
                    ©2018-{new Date().getFullYear().toString().slice(-2)} University of Hawai&#699;i · Page last modified: January 14, 2024 
                </div>
            </footer>
        </>
    )

}