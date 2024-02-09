import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Navbar} from '../../components/Navbar';
import { Footer} from '../../components/Footer';

export const EventsPage = ()=>{

    return(
        <>
            
            <Navbar/>
            <div className='container text-left ' style={{fontFamily:'Poppins',paddingTop:115}}>

                <div className='my-4'>
                    <h2 className='fw-bold'>EVENTS</h2>
                </div>

                <div className='my-4'>
                    <h4>Weekly LGBTQ+ Coffee Hour</h4>
                    <p>Students meet every Wednesday afternoon from 4:00 pm-5:00 pm for our weekly LGBTQ+ and Ally Coffee Hour. This is an informal drop-in group where students are free to come as they are and share space with others who are committed to LGBTQ+ equity and inclusion. We are currently meeting in person and masks are required.</p>
                    <div className="row">
                        <div class="col-md">
                            <img src="../../assets/Coffee_Hour_1.png" class="img-fluid" alt="..."></img>
                        </div>
                        <div class="col-md">
                            <img src="../../assets/Coffee_Hour_2.png" class="img-fluid" alt="..."></img>
                        </div>

                    </div>
                </div>

                <div className='my-4'>
                    <h4>Educational Events and Programs</h4>
                    <p>The LGBTQ+ Center sponsors annual events, including National Coming Out Day (October); Transgender Day of Remembrance (November); and the Rainbow Graduation (May) which celebrates the achievements of our graduating LGBTQ+ and ally students. In the spring semester we host sessions to prepare for graduate and professional school and entering the workforce as an LGBTQ+ person. We also participate in the Honolulu Pride Parade and Festival every October.</p>
                    <p>You can view our events calendar <a href='https://calendar.google.com/calendar/u/0?cid=Y19iNzNhNDU4ODY0MTdmODdiZGExYzc3NDFiODIyZWRlODAzZTIzZGI1YWQ4YWI1NWIzNjMzNmJlMmJjZWMyZTljQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20'>here</a></p>
                </div>

            </div>
            <Footer/>
        </>
    )
}