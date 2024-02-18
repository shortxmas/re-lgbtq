import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageCarousel } from "../components/ImageCarousel";

export const HomePage = () => {
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
        className="d-flex container justify-content-center  flex-column"
        style={{
          paddingTop: 100,
        }}
      >
        <ImageCarousel />

        <div className="text-left my-4 " style={{ fontFamily: "Poppins" }}>
          {/* <div className='text-left my-4 'style={{fontFamily:'Poppins'}} data-sal="slide-down" data-sal-duration="1200"> */}
          <p>
            We are open to serve you through walk-in counter service and in
            person or Zoom appointments.
          </p>
          <p>
            Our center is open to provide you with assistance via Zoom,
            in-person, or over the phone, Monday-Friday from 9:00 am-5:00 pm.
          </p>
          <p>
            Our staff is available to provide resources, referrals and student
            support during regular business hours. To speak with Director
            Camaron Miyamoto, please make an appointment with this link:
            calendly.com/uhmlgbtqcalendar
          </p>

          <p>
            The LGBTQ+ Center Lounge is open during regular business hours.
            Reservations are not required.
          </p>
          <h3 className="fw-bold">PURPOSE</h3>
          <p>
            Lesbian, Gay, Bisexual, Transgender & Queer+ (LGBTQ+) Center works
            to eliminate systemic barriers to academic excellence and student
            success, strives to maintain a safe and inclusive campus environment
            that is free from harassment and discrimination, an seeks to affirm
            LGBTQ+ and māhū people across our campus community. Our purpose is
            to empower students to create healthy living-learning communities,
            enhance interpersonal growth, and celebrate academic achievement. We
            offer daily direct services, support and referrals via Zoom
            appointment and on the phone, M-F, 9:00am-5:00pm.
          </p>
        </div>
      </div>

      <Footer />
    </>
  ) : (
    <div className="d-flex justify-content-center ">
      <div className="spinner-border my-5"></div>
    </div>
  );
};
