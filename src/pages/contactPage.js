import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactPageMembers } from "../components/ContactPageMembers";

export const ContactPage = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap";
    link.rel = "stylesheet";

    // Use a callback to ensure the fonts are loaded
    link.onload = () => {
      setFontsLoaded(true);
    };

    // Append the link to the document head
    document.head.appendChild(link);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return fontsLoaded ? (
    <>
      <Navbar />

      <div
        className="container mb-5"
        style={{ paddingTop: 100, fontFamily: "Poppins" }}
      >
        <div className="row justify-content-center align-center my-5">
          <div className="col-12 col-lg-8 text-center">
            <div className="card">
              <div className="card-body">
                <h2 className="f">Contact Us</h2>
                <form
                  action="https://api.backendform.com/sendform/lgbtq@hawaii.edu"
                  method="post"
                >
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
                      padding: 10,
                    }}
                    required
                  />
                  <br />
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
                      padding: 10,
                    }}
                    required
                  />
                  <br />
                  <textarea
                    className="contact-text"
                    placeholder="Your Message"
                    type="text"
                    name="message"
                    style={{
                      height: 150,
                      paddingBottom: 115,
                      marginTop: 25,
                      width: "90%",
                      backgroundColor: "#e8e8e8",
                      border: "none",
                      borderRadius: 8,
                      fontSize: "medium",
                      padding: 10,
                    }}
                    required
                  />
                  <br />
                  <button
                    className="btn text-white"
                    type="submit"
                    style={{
                      backgroundColor: "#2C4230",
                      height: 45,
                      width: 120,
                      marginTop: 35,
                      borderRadius: 60,
                    }}
                  >
                    {" "}
                    Submit{" "}
                  </button>
                  <input
                    hidden
                    type="text"
                    name="from"
                    defaultValue="LGBTQ+ Website"
                  ></input>
                  <input
                    hidden
                    type="text"
                    name="redirect"
                    defaultValue="http://localhost:3000/"
                  ></input>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ContactPageMembers />
      </div>

      <Footer />
    </>
  ) : (
    <div className="d-flex justify-content-center ">
      <div className="spinner-border my-5"></div>
    </div>
  );
};
