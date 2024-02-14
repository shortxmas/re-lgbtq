import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export const ImageCarousel = (props) => {
  const [carouselVisibility, changeCarouselVisibility] = useState({
    display: "none",
  });
  const [loadingVisibility, changeLoadingVisibility] = useState({
    alignItems: "center",
  });

  const showCarousel = () => {
    changeCarouselVisibility();
  };

  const hideLoading = () => {
    changeLoadingVisibility({ display: "none" });
  };

  const carouselData = props.data;
  console.log(carouselData);
  console.log(carouselData[0].image_url);
  const renderCarousel = () => {
    let imageArray = [];

    for (let i = 0; i < carouselData.length; i++) {
      if (i === carouselData.length - 1) {
        imageArray.push(
          <div className="carousel-item active" data-bs-interval="3500">
            <img
              src={carouselData[i].image_url}
              className="d-block w-100 "
              alt="..."
              onLoad={() => {
                hideLoading();
                showCarousel();
                document.getElementById("next-button").click();
              }}
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">{carouselData[i].label}</h5>
              <p className="text-white">{carouselData[i].description}</p>
            </div>
          </div>
        );
      } else {
        imageArray.push(
          <div className="carousel-item" data-bs-interval="3500">
            <img
              src={carouselData[i].image_url}
              className="d-block w-100 "
              alt="..."
            ></img>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white">{carouselData[i].label}</h5>
              <p className="text-white">{carouselData[i].description}</p>
            </div>
          </div>
        );
      }
    }

    return imageArray;
  };

  const carousel = () => {
    return (
      <div
        id="carouselExampleCaptions"
        className="carousel carousel-dark slide w-100 my-4"
        data-bs-ride="carousel"
        style={carouselVisibility}
      >
        <div className="carousel-inner">{renderCarousel()}</div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          id="next-button"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };

  return (
    <>
      <div class="d-flex justify-content-center " style={loadingVisibility}>
        <div class="spinner-border my-5" style={loadingVisibility}></div>
      </div>

      {carousel()}
    </>
  );
};
