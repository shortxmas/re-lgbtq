import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { rootUrl } from "../urls";

export const ContactPageMembers = () => {

  const [membersData, setMembersData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(rootUrl + "members/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        setMembersData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  console.log(membersData)


  return (
    <>
      <div className="row d-flex justify-content-center align-middle my-2">
        <div className="col-12 col-lg-4 d-flex py-2 px-5" style={{}}>
          <img
            src="../../assets/cam.png"
            className="img-fluid border"
            alt="..."
          ></img>
        </div>

        <div
          className="col-12 col-lg-4 d-flex py-2 justify-content-center"
          style={{ alignItems: "center" }}
        >
          <div className="text-start">
            <h3> Camoran Miyamoto</h3>
            <h5>Director</h5>
            <p>lgbtq@hawaii.edu</p>
          </div>
        </div>
      </div>
    </>
  );
};
