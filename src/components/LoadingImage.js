import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export const LoadingImage = (props) => {
  const [imageStyle, changeImageStyle] = useState({ display: "none" });
  const [loadingStyle, changeLoadingStyle] = useState();

  return (
    <>
      <div className="d-flex justify-content-center " style={loadingStyle}>
        <div className="spinner-border my-5" style={loadingStyle}></div>
      </div>

      <img
        style={imageStyle}
        src={props.uri}
        className={props.class}
        alt="..."
        onLoad={() => {
          changeImageStyle();
          changeLoadingStyle({ display: "none" });
        }}
      ></img>
    </>
  );
};
