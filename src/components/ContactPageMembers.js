import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { rootUrl } from "../urls";
import { LoadingImage } from "./LoadingImage";

export const ContactPageMembers = () => {
  const [membersData, setMembersData] = useState();
  const [loading, setLoading] = useState(true);

  const [loadingVisibility, changeLoadingVisibility] = useState({
    alignItems: "center",
  });

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

  const renderMembers = () => {
    const ret = [];
    membersData.forEach((member) => {
      if (member.image != null) {
        ret.push(
          <div
            key={member}
            className="row d-flex justify-content-center align-middle my-2"
          >
            <div
              className="col-12 col-lg-4 d-flex py-2 justify-content-center px-5"
              style={{}}
            >
              <LoadingImage class="img-fluid border" uri={member.image} />
            </div>

            <div
              className="col-12 col-lg-4 d-flex py-2 px-5"
              style={{ alignItems: "center" }}
            >
              <div style={{ width: "100%" }}>
                <h3 className="text-start">{member.name}</h3>
                <h5 className="text-start">{member.title}</h5>
                <h6 className="text-start">{member.pronouns}</h6>
                <p className="text-start">{member.email}</p>
              </div>
            </div>
          </div>
        );
      } else {
        ret.push(
          <div
            key={member}
            className="row d-flex justify-content-center align-middle my-2"
          >
            <div
              className="col-12 col-lg-4 d-flex py-2 justify-content-center px-5"
              style={{}}
            ></div>

            <div
              className="col-12 col-lg-4 d-flex py-2 px-5"
              style={{ alignItems: "center" }}
            >
              <div style={{ width: "100%" }}>
                <h3 className="text-start">{member.name}</h3>
                <h5 className="text-start">{member.title}</h5>
                <h6 className="text-start">{member.pronouns}</h6>
                <p className="text-start">{member.email}</p>
              </div>
            </div>
          </div>
        );
      }
    });

    return ret;
  };

  // console.log(membersData);

  return loading ? (
    <div className="d-flex justify-content-center " style={loadingVisibility}>
      <div className="spinner-border my-5" style={loadingVisibility}></div>
    </div>
  ) : (
    <>{renderMembers()}</>
  );
};
