import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { LoadingImage } from "../../components/LoadingImage";

export const RainbowProgramsPage = () => {
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
        className="container text-left"
        style={{ fontFamily: "Poppins", paddingTop: 100 }}
      >
        <div className="my-4">
          <h2 className="fw-bold">RAINBOW PROGRAMS</h2>
        </div>
        <hr></hr>
        <div className="my-4">
          <h4>Rainbow ʻOhana Program</h4>
          <p>
            The Rainbow ʻOhana Program is an extended family of support at UH
            Mānoa for LGBTQ+ and ally students. It is a peer mentorship program
            that enhances student success and provides opportunities for
            university and community service.
          </p>
          <p>
            The Rainbow ʻOhana Program holds monthly discussion groups
            facilitated by peer mentors about LGBTQ+ identity and student
            success. It also sponsors volunteer opportunites on campus and in
            the larger community.
          </p>
          <p>
            Students who participate in the Rainbow ʻOhana Program and
            successfully participate in scheduled community service
            opportunities will have the opportunity to receive a Rainbow Stole
            upon graduation
          </p>
          <p>
            For more information and to participate in the Rainbow ʻOhana
            Program, email LGBTQ@hawaii.edu
          </p>
          <div className="row">
            <div className="col-lg-6">
              <LoadingImage
                uri="https://lgbtq-center-portal.vercel.app/download/?name=website.File%2Fbytes%2Ffilename%2Fmimetype%2FRAINBOW_OHANA_PROGRAM-1-min.webp"
                class="img-fluid w-sm-50"
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="my-4">
          <h4>Rainbow Graduation</h4>
          <p>
            {" "}
            At the end of Spring Semester, we celebrate the achievements of our
            LGBTQ+ and ally students by honoring our graduates in a ceremony
            where we confer a rainbow tassel and certificate. In addition,
            participants in the Rainbow ʻOhana Program are conferred a rainbow
            graduation stole that can be worn in the UH Mānoa commencement
            ceremony.
          </p>
          <p>
            For more information about Rainbow Graduation, email
            LGBTQ@hawaii.edu
          </p>
        </div>
        <hr></hr>
        <div className="my-4">
          <h4>Safe Zone Training : LGBTQ+ Safety and Inclusion</h4>
          <p>
            Announcing the Safe Zone Training schedule on LGBTQ+ equity and
            inclusion at UH Mānoa. Please register today. Participants who
            complete the training will receive a Safe Zone sign to indicate
            their participation in this program aimed at addressing campus
            climate, LGBTQ+ inclusion and equity.
          </p>
          <p>
            Anyone looking to address oppression and be part of a
            university-wide campaign to build a safe and welcoming campus
            community for LGBTQ+ people.
          </p>
          <p>
            Some things that will be addressed include the difference between
            "assigned sex," "gender" and "sexual orientation", the rights of the
            LGBTQ+ UHM community, how to maximize gender and LGBTQ+ inclusion in
            your daily life and how to be an effective ally or advocate for
            LGBTQ+ people.
          </p>
          <h5>Safe Zone is sponsored by : </h5>
          <p>
            <span>UH Office of the President</span>
            <br></br>
            <span>UH Commission on LGBTQ+ Equality</span>
            <br></br>
            <span>UH Mānoa Office of the Provost</span>
            <br></br>
            <span>
              UH Mānoa Office of Student Affairs, including the Office of
              Student Equity, Excellence and Diversity
            </span>
            <br></br>
            <span>UH Mānoa LGBTQ+ Center</span>
            <br></br>
          </p>
          <p>More Info: 956-9250; LGBTQ@hawaii.edu</p>
          <div>
            <h4 className="fw-bold">SAFEZONE PRE-REGISTRATION IS REQUIRED</h4>
            <p>Click below for the Safe Zone Registration Link:</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfT4kDkC3Pl2ZC3K0Nfn5u7H5BhmDLjWDgRTL1Fb7JPQvJlhA/viewform">
              <button type="button" className="btn btn-success fw-bold">
                Saze Zone Registration
              </button>
            </a>
          </div>

          <div className="row py-3">
            <div className="col-lg-8">
              <LoadingImage
                uri="https://lgbtq-center-portal.vercel.app/download/?name=website.File%2Fbytes%2Ffilename%2Fmimetype%2Flgbtq-training.webp"
                class="img-fluid w-sm-50"
              />
            </div>
          </div>
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
