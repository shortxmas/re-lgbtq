import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { rootUrl } from "../urls";

export const ImageCarousel = () => {
  const [carouselData, setCarouselData] = useState();
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(rootUrl + "carousel/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        setCarouselData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderCarousel = () => {
    let imageArray = [];

    for (let i = 0; i < carouselData.length; i++) {
      if (i === carouselData.length - 1) {
        imageArray.push(
          <div className="carousel-item active" data-bs-interval="3500">
            <img
              rel="preload"
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
              rel="preload"
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
        <div className="carousel-inner"></div>
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

  return loading ? (
    <div class="d-flex justify-content-center " style={loadingVisibility}>
      <div class="spinner-border my-5" style={loadingVisibility}></div>
    </div>
  ) : (
    <>
      <div class="d-flex justify-content-center " style={loadingVisibility}>
        <div class="spinner-border my-5" style={loadingVisibility}></div>
      </div>

      {carousel()}
    </>
  );
};
