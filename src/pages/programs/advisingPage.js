import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const AdvisingPage = () => {
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
        className="container text-left "
        style={{ fontFamily: "Poppins", paddingTop: 100 }}
      >
        <div className="my-4">
          <h2 className="fw-bold">ADVISING</h2>
        </div>
        <p>
          Our center is open to provide you with assistance via Zoom, in-person,
          or over the phone, Monday-Friday from 9:00 am-5:00 pm.
        </p>
        <p>
          Our staff is available to provide resources, referrals and student
          support during regular business hours.
        </p>
        <p>
          To speak with Director Camaron Miyamoto, please make an appointment
          with this link:{" "}
          <a href="https://calendly.com/uhmlgbtqcalendar">
            https://calendly.com/uhmlgbtqcalendar
          </a>{" "}
          or below
        </p>
        <div class="ratio ratio-4x3 my-3 border">
          <iframe
            class="embed-responsive-item"
            src="https://calendly.com/uhmlgbtqcalendar"
          ></iframe>
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
