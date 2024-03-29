import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const RightsPage = () => {
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

      <div className="container" style={{ paddingTop: 100 }}>
        <div className="text-left my-4 " style={{ fontFamily: "Poppins" }}>
          {/* <div className='text-left my-4 'style={{fontFamily:'Poppins'}} data-sal="slide-down" data-sal-duration="1200"> */}
          <div className="my-4">
            <h2 className="fw-bold">RIGHTS</h2>
          </div>
          <hr></hr>
          <p>
            Please reach out if you feel your right have experienced harassment
            or discrimination. You have protections against being misgendered,
            "dead-named", outed, or disrespected for your real or perceived
            sexual orientation, gender identity or gender expression.
          </p>
          <p>For assistance: LGBTQ@hawaii.edu</p>
          <p>For confidential advocacy: manoaadv@hawaii.edu</p>
          <p>To file a complaint/grievance: t9uhm@hawaii.edu</p>
        </div>
        <hr></hr>
        <div className="text-left my-4 " style={{ fontFamily: "Poppins" }}>
          <h4>We have 20 All-Gender Restrooms at UH Mānoa</h4>
          <p>
            All-gender restrooms campus map link{" "}
            <a href="https://map.hawaii.edu/manoa/?layer1=All-Gender%20Restrooms">
              {" "}
              here
            </a>
          </p>
          <div class="ratio ratio-4x3 my-3 border">
            <iframe
              class="embed-responsive-item"
              src="https://map.hawaii.edu/manoa/?layer1=All-Gender%20Restrooms"
            ></iframe>
          </div>
          <h4>
            You have the right to use the gendered space that corresponds to
            your gender identity, not your assigned sex.
          </h4>
          <a href="https://hawaii.edu/policy/?action=viewPolicy&policySection=ep&policyChapter=1&policyNumber=205">
            <p>
              Executive Policy 1.205 Policy and Guidelines on Inclusive
              Facilities
            </p>
          </a>
        </div>
        <hr></hr>
        <div className="text-left my-4 " style={{ fontFamily: "Poppins" }}>
          <h4>Changing Your Name in UH Records</h4>
          <div class="ratio ratio-4x3 my-3 border">
            <iframe
              class="embed-responsive-item"
              src="https://manoa.hawaii.edu/lgbtq/downloads/name_change_preferred_name.pdf"
            ></iframe>
          </div>
          <a href="https://manoa.hawaii.edu/lgbtq/downloads/name_change_preferred_name.pdf">
            Download the Preferred Name Form{" "}
          </a>
          (PDF)*
        </div>
        <hr></hr>
        <div className="text-left my-4 " style={{ fontFamily: "Poppins" }}>
          <h4>Additional Policies</h4>
          <a href="https://www.hawaii.edu/titleix/documents/11083/">
            <p>
              Executive Policy 1.204, Policy on Title IX Sexual Harassment (eff.
              Aug. 14, 2020)
            </p>
          </a>
          <a href="https://www.hawaii.edu/titleix/documents/11078/">
            <p>
              Administrative Procedure AP 1.204, Title IX Sexual Harassment
              Grievance Process (eff. Aug. 14, 2020)
            </p>
          </a>
          <a href="https://www.hawaii.edu/policy/index.php?action=viewPolicy&policySection=rp&policyChapter=1&policyNumber=202">
            <p>
              Executive Policy 1.202, Nondiscrimination and Affirmative Action
            </p>
          </a>
          <a href="https://hawaii.edu/policy/docs/temp/ap9.920.pdf">
            <p>
              Administrative Procedure 9.920, Discrimination Complaint
              Procedures for Employees, Students, and Applicants for Employment
              or Admission
            </p>
          </a>
          <a href="http://hawaii.edu/policy/?action=viewPolicy&policySection=ep&policyChapter=7&policyNumber=208">
            <p>Executive Policy 7.208, Systemwide Student Conduct Code</p>
          </a>
          <a href="https://www.hawaii.edu/policy/?action=viewPolicy&policySection=ep&policyChapter=7&policyNumber=205">
            <p>
              Executive Policy 7.205, Systemwide Student Disciplinary Sanctions
            </p>
          </a>
          <a href="http://hawaii.edu/policy/?action=viewPolicy&policySection=ep&policyChapter=9&policyNumber=210">
            <p>Executive Policy 9.210, Workplace Non-Violence</p>
          </a>
        </div>
      </div>

      <Footer />

      <style></style>
    </>
  ) : (
    <div className="d-flex justify-content-center ">
      <div className="spinner-border my-5"></div>
    </div>
  );
};
