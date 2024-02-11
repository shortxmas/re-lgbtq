import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const ContactPage = () => {
  return (
    <>
      <Navbar />
  
      <div className="container" style={{paddingTop: 100, paddingBottom: 100}}>
        <div className="row justify-content-center">
          <div className="col text-center">
            <div className="card">
              <div className="card-body">
                <h1>Contact Us</h1>
                <form action="https://api.backendform.com/sendform/emailhere" method="post">
                <input 
                  className="contact-text" 
                  placeholder="Your Name" 
                  type="text" 
                  name="name"
                  style={{
                    marginTop: 25,
                    width: "80%",
                    height: 45,
                    backgroundColor: "#e8e8e8",
                    border: "none",
                    borderRadius: 8,
                    fontSize: "medium",
                    padding: 10
                  }} 
                  />
                <br/>
                <input 
                  className="contact-text" 
                  placeholder="Your Email" 
                  type="email" 
                  name="email"
                  style={{
                    marginTop: 25,
                    width: "80%",
                    height: 45,
                    backgroundColor: "#e8e8e8",
                    border: "none",
                    borderRadius: 8,
                    fontSize: "medium",
                    padding: 10
                  }}
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
                    width: "80%",
                    backgroundColor: "#e8e8e8",
                    border: "none",
                    borderRadius: 8,
                    fontSize: "medium",
                    padding: 10
                    }}/>
                <br/>
                <button className="btn text-white" type="submit" style={{backgroundColor: "#2C4230", height: 45, width: 120, marginTop:35, borderRadius: 60}}> Submit </button>
                <input hidden type="text" name="from" value="LGBTQ+ Website"></input>
                <input hidden type="text" name="redirect" value = "http://localhost:3000/"></input>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>

   
      <Footer />
    </>
  );
};
