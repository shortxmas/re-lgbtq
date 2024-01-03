import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Footers = ()=>{

    return(
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <footer className="text-center text-lg-start text-white bg-dark">
                <section className="d-flex justify-content-between p-4" style={{backgroundColor: '#2C4230'}}>
                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">LBTQ+ Center</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, height: 2, backgroundColor: '#7c4dff'}}/>
                                <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, height: 2, backgroundColor: '#7c4dff'}}/>
                                <p>
                                    <a href="#!" className="text-white">MDBootstrap</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">MDWordPress</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">BrandFlow</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Bootstrap Angular</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, height: 2, backgroundColor: '#7c4dff'}}/>
                                <p>
                                    <a href="#!" className="text-white">Your Account</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Become an Affiliate</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Shipping Rates</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60, height: 2, backgroundColor: '#7c4dff'}}/>
                                <p><i className="fa fa-home mr-3"></i> Honolulu, HI 96822, US</p>
                                <p><i className="fa fa-envelope mr-3"></i> info@example.com</p>
                                <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )

}