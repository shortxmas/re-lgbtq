import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const ResourcesPage = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap"
        rel="stylesheet"
      ></link>

      <Navbar />
      <div
        className="container text-left "
        style={{ fontFamily: "Poppins", paddingTop: 100 }}
      >
        <div className="my-4">
          <h2 className="fw-bold">RESOURCES</h2>
        </div>

        <div>
          <h3> Relevant National/Community/Campus Links and Phone Numbers</h3>

          <div className="my-4">
            <h4>UH Campus</h4>
            <div className="my-1">
              <span className="fw-bold">UHM Women’s Center</span>
              <br></br>
              <span>Phone: 956-8059</span>
              <br></br>
              <span>
                Website:{" "}
                <a href="http://www.hawaii.edu/womenscenter/">
                  http://www.hawaii.edu/womenscenter/
                </a>
              </span>
              <br></br>
            </div>
            <div className="my-1">
              <span className="fw-bold">
                UHM Student Equity Excellence and Diversity
              </span>
              <br></br>
              <span>Phone: 956-4642</span>
              <br></br>
              <span>
                Website:{" "}
                <a href="http://www.hawaii.edu/diversity/">
                  http://www.hawaii.edu/diversity/
                </a>
              </span>
              <br></br>
            </div>

            <div className="my-1">
              <span className="fw-bold">UHM Women’s Center</span>
              <br></br>
              <span>Phone: 956-8059</span>
              <br></br>
              <span>
                Website:{" "}
                <a href="http://www.hawaii.edu/womenscenter/">
                  http://www.hawaii.edu/womenscenter/
                </a>
              </span>
              <br></br>
            </div>
          </div>

          <div className="my-4">
            <h4>University of Hawaiʻi System</h4>
            <div className="my-1">
              <span className="fw-bold">UH Commission on LGBTQ+ Equality</span>
              <br></br>
              <span>
                Website:{" "}
                <a href="http://www.hawaii.edu/offices/op/lgbti/index.html">
                  http://www.hawaii.edu/offices/op/lgbti/index.html
                </a>
              </span>
              <br></br>
            </div>
          </div>

          <div className="my-4">
            <h4>Hawaiʻi Community</h4>
            <div className="my-1">
              <span className="fw-bold">ACLU Hawaiʻi</span>
              <br></br>
              <span>Phone: 956-8059</span>
              <br></br>
              <span>
                Website: <a href="http://acluhi.org/">http://acluhi.org/</a>
              </span>
              <br></br>
            </div>
            <div className="my-1">
              <span className="fw-bold">
                Gay, Lesbian, & Straight Education Network (GLSEN) Hawaiʻi
              </span>
              <br></br>
              <span>
                Website:{" "}
                <a href="http://glsen.org/chapters/hawaii">
                  http://glsen.org/chapters/hawaii
                </a>
              </span>
              <br></br>
            </div>
            <div className="my-1">
              <span className="fw-bold">
                Hawaiʻi Health and Harm Reduction Center
              </span>
              <br></br>
              <span>
                Reducing harm and fighting the stigma of HIV, hepatitis,
                homelessness, substance use, mental illness, and poverty in our
                community
              </span>
              <br></br>
              <span>
                Website:{" "}
                <a href="https://www.hhhrc.org/">https://www.hhhrc.org/</a>
              </span>
              <br></br>
            </div>
            <div className="my-1">
              <span className="fw-bold">Hawaiʻi LGBT Legacy Foundation</span>
              <br></br>
              <span>Honolulu Pride and LGBTQ+ Events and Programs</span>
              <br></br>
              <span>
                Website:{" "}
                <a href="http://hawaiilgbtlegacyfoundation.com/">
                  http://hawaiilgbtlegacyfoundation.com/
                </a>
              </span>
              <br></br>
            </div>
            <div className="my-1">
              <span className="fw-bold">Kuaʻana Project</span>
              <br></br>
              <span>Resources for transgender and māhū communities</span>
              <br></br>
              <span>
                Website:{" "}
                <a href="https://www.hhhrc.org/transgender">
                  https://www.hhhrc.org/transgender
                </a>
              </span>
              <br></br>
            </div>

            <div className="my-1">
              <span className="fw-bold">The Lavender Clinic</span>
              <br></br>
              <span>Gender affirming care</span>
              <br></br>
              <span>
                Website:{" "}
                <a href="https://www.lavenderclinic.org/">
                  https://www.lavenderclinic.org/
                </a>
              </span>
              <br></br>
            </div>
            <div className="my-1">
              <span className="fw-bold">Mental Health America of Hawaiʻi</span>
              <br></br>
              <span>
                Website:{" "}
                <a href="http://www.mentalhealth-hi.org/stopyouthsuicide-and-bullying">
                  http://www.mentalhealth-hi.org/stopyouthsuicide-and-bullying
                </a>
              </span>
              <br></br>
            </div>
            <div className="my-1">
              <span className="fw-bold">PFLAG</span>
              <br></br>
              <span>For families and friends of LGBTQ+ people</span>
              <br></br>
              <span>
                Website: <a href="https://pflag.org/">https://pflag.org/</a>
              </span>
              <br></br>
            </div>
          </div>

          <div className="my-4">
            <h4>National Resources</h4>
            <div className="my-1">
              <span className="fw-bold">Campus Pride</span>
              <br></br>
              <span>
                Website:{" "}
                <a href="https://www.campuspride.org/">
                  https://www.campuspride.org/
                </a>
              </span>
              <br></br>
            </div>
            <div className="my-1">
              <span className="fw-bold">Gender Spectrum</span>
              <br></br>
              <span>
                Website:{" "}
                <a href="https://genderspectrum.org/">
                  https://genderspectrum.org/
                </a>
              </span>
              <br></br>
            </div>
            <div className="my-1">
              <span className="fw-bold">Human Rights Campaign</span>
              <br></br>
              <span>
                Website: <a href="https://www.hrc.org/">https://www.hrc.org/</a>
              </span>
              <br></br>
            </div>
            <div className="my-1">
              <span className="fw-bold">Human Rights Campaign</span>
              <br></br>
              <span>
                Website:{" "}
                <a href="https://pointfoundation.org/">
                  https://pointfoundation.org/
                </a>
              </span>
              <br></br>
            </div>
            <div className="my-1">
              <span className="fw-bold">Lambda Legal</span>
              <br></br>
              <span>
                Website:{" "}
                <a href="https://www.lambdalegal.org/states-regions/hawaii">
                  https://www.lambdalegal.org/states-regions/hawaii
                </a>
              </span>
              <br></br>
            </div>
            <div className="my-1">
              <span className="fw-bold">Point Foundation Scholarships</span>
              <br></br>
              <span>
                Website:{" "}
                <a href="https://pointfoundation.org/">
                  https://pointfoundation.org/
                </a>
              </span>
              <br></br>
            </div>
            <div className="my-1">
              <span className="fw-bold">National LGBTQ Task Force</span>
              <br></br>
              <span>
                Website:{" "}
                <a href="https://www.thetaskforce.org/">
                  https://www.thetaskforce.org/
                </a>
              </span>
              <br></br>
            </div>
          </div>

          <div className="my-4">
            <h4>National Resources</h4>
            <div className="my-1">
              <span className="fw-bold">The Trevor Project</span>
              <br></br>
              <span>
                Free confidential crisis counselors, 24/7, 365 days a year
              </span>
              <br></br>
              <span>
                Website:{" "}
                <a href="https://www.thetrevorproject.org/get-help/">
                  https://www.thetrevorproject.org/get-help/
                </a>
              </span>
              <br></br>
            </div>
            <div className="my-1">
              <span className="fw-bold">Trans Lifeline</span>
              <br></br>
              <span>
                Crisis counseling by and for trans and non-binary people
              </span>
              <br></br>
              <span>
                Website:{" "}
                <a href="https://translifeline.org/hotline/">
                  https://translifeline.org/hotline/
                </a>
              </span>
              <br></br>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
