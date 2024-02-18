import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { rootUrl } from "../urls";

export const Footer = () => {
  const [footerData, setFooterData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(rootUrl + "footer/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        setFooterData(jsonData[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderSocialMedias = () => {
    let socialMedias = [];

    footerData.social_medias.forEach((k, v) => {
      // console.log(footerData.social_medias[v].social_media);
      switch (footerData.social_medias[v].social_media) {
        case "instagram":
          socialMedias.push(
            <a
              href={footerData.social_medias[v].link}
              target="_blank"
              className="text-white me-4"
              key={footerData.social_medias[v].social_media}
            >
              <i className="fab fa-instagram"></i>
            </a>
          );
          break;
        case "twitter":
          socialMedias.push(
            <a
              href={footerData.social_medias[v].link}
              target="_blank"
              className="text-white me-4"
              key={footerData.social_medias[v].social_media}
            >
              <i className="fab fa-twitter"></i>
            </a>
          );
          break;
        case "linkedIn":
          socialMedias.push(
            <a
              href={footerData.social_medias[v].link}
              target="_blank"
              className="text-white me-4"
              key={footerData.social_medias[v].social_media}
            >
              <i className="fab fa-linkedin"></i>
            </a>
          );
          break;
        case "discord":
          socialMedias.push(
            <a
              href={footerData.social_medias[v].link}
              target="_blank"
              className="text-white me-4"
              key={footerData.social_medias[v].social_media}
            >
              <i className="fab fa-discord"></i>
            </a>
          );
          break;
        case "facebook":
          socialMedias.push(
            <a
              href={footerData.social_medias[v].link}
              target="_blank"
              className="text-white me-4"
              key={footerData.social_medias[v].social_media}
            >
              <i className="fab fa-facebook"></i>
            </a>
          );
          break;
      }
    });
    return socialMedias;
  };

  return (
    <>
      <footer className="text-center text-lg-start text-white bg-dark">
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#2C4230" }}
        >
          <div className="me-5">
            <span>Get connected with us on our social networks:</span>
          </div>

          <div>{loading ? "" : renderSocialMedias()}</div>
        </section>
        <div></div>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Newsletter</h6>
                <hr
                  className="mb-2 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, height: 2, backgroundColor: "#7c4dff" }}
                />
                <p>
                  Want to know what we're up to? Sign up for the newsletter!
                </p>
                <form className="form">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      style={{}}
                    />
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="btn text-white"
                    style={{ backgroundColor: "#2C4230", borderRadius: 100 }}
                  >
                    Submit
                  </button>
                </form>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Address</h6>
                <hr
                  className="mb-2 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, height: 2, backgroundColor: "#7c4dff" }}
                />
                <p>
                  <i className="fa fa-home mr-3"></i>
                  {loading ? "..." : " " + footerData.address}
                </p>
                <p></p>
                <p></p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-2 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, height: 2, backgroundColor: "#7c4dff" }}
                />
                <p>
                  <i className="fa fa-envelope mr-3"></i>
                  {loading ? "..." : " " + footerData.contact_email}
                </p>
                <p>
                  <i className="fa fa-phone mr-3"></i>{" "}
                  {loading ? "..." : " " + footerData.contact_phone_number}
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-3" style={{ backgroundColor: "#2C4230" }}>
          ©{loading ? "..." : " " + footerData.copyright_year} University of
          Hawai&#699;i · Page last modified:{" "}
          {loading ? "..." : " " + footerData.page_last_updated}
        </div>
      </footer>
    </>
  );
};
