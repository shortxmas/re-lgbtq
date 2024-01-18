import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../components/Navbar';



export const HomePage = () =>{


    return (
    
    <>

        <Navbar/>

        <div className='d-flex container justify-content-center  flex-column ' data-sal="slide-up" data-sal-duration="1200">

            <div id="carouselExampleCaptions" className="carousel slide w-100 my-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3500">
                    <img src="../../assets/manoa_pride_image_1.png" className="d-block w-100 " alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3500">
                    <img src="../../assets/manoa_pride_image_2.png" className="d-block w-100 " alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            <div className='text-center my-5'>

             
                <p>We are open to serve you through walk-in counter service and in person or Zoom appointments.</p>
                <p>Our center is open to provide you with assistance via Zoom, in-person, or over the phone, Monday-Friday from 9:00 am-5:00 pm.</p>
                <p>Our staff is available to provide resources, referrals and student support during regular business hours. To speak with Director Camaron Miyamoto, please make an appointment with this link: calendly.com/uhmlgbtqcalendar</p>
                <p>The LGBTQ+ Center Lounge is open during regular business hours. Reservations are not required.</p>
            </div>

        </div>
 
        

    </>

    )

}