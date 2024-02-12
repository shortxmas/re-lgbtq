import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const ContactPage = () => {
  return (
    <>
      <Navbar />
  
      <div className="container mb-5" style={{paddingTop: 100, fontFamily: "Poppins"}}>
        <div className="row justify-content-center align-center my-5">
          <div className="col-12 col-lg-8 text-center">
            <div className="card" >
              <div className="card-body">
                <h2 className="f">Contact Us</h2>
                <form action="https://api.backendform.com/sendform/lgbtq@hawaii.edu" method="post">
                <input 
                  className="contact-text" 
                  placeholder="Your Name" 
                  type="text" 
                  name="name"
                  style={{
                    marginTop: 25,
                    width: "90%",
                    height: 45,
                    backgroundColor: "#e8e8e8",
                    border: "none",
                    borderRadius: 8,
                    fontSize: "medium",
                    padding: 10
                  }} 
                  required
                  />
                <br/>
                <input 
                  className="contact-text" 
                  placeholder="Your Email" 
                  type="email" 
                  name="email"
                  style={{
                    marginTop: 25,
                    width: "90%",
                    height: 45,
                    backgroundColor: "#e8e8e8",
                    border: "none",
                    borderRadius: 8,
                    fontSize: "medium",
                    padding: 10
                  }}
                  required
                  />
                <br/>
                <textarea 
                  className="contact-text" 
                  placeholder="Your Message" 
                  type="text" name="message" 
                  style={{
                    height:150, 
                    paddingBottom:115,
                    marginTop: 25,
                    width: "90%",
                    backgroundColor: "#e8e8e8",
                    border: "none",
                    borderRadius: 8,
                    fontSize: "medium",
                    padding: 10
                    }}
                    required
                    />
                <br/>
                <button className="btn text-white" type="submit" style={{backgroundColor: "#2C4230", height: 45, width: 120, marginTop:35, borderRadius: 60}}> Submit </button>
                <input hidden type="text" name="from" value="LGBTQ+ Website"></input>
                <input hidden type="text" name="redirect" value = "http://localhost:3000/"></input>
              </form>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="row d-flex justify-content-center align-middle ">

            <div className="col-12 col-lg-4 d-flex py-2" style={{}}>
             <img
                src="../../assets/cam.png"
                class="img-fluid border"
                alt="..."

              ></img>
            </div>

            <div className="col-12 col-lg-4 d-flex py-2 justify-content-center" style={{alignItems:'center' ,}}>
              <div className="text-start" >
                <h3> Camoran Miyamoto</h3>
                <h5>Director</h5>
                <p>lgbtq@hawaii.edu</p>
              </div>
            </div>

        </div>



      </div>

   
      <Footer />
    </>
  );
};
