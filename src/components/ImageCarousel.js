import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


export const ImageCarousel = (props) => {

  const [carouselVisibility,changeCarouselVisibility] = useState({display:'none'})
  const [loadingVisibility, changeLoadingVisibility] = useState({ alignItems: "center"})

  const showCarousel = ()=>{
    changeCarouselVisibility()
  }

  const hideLoading = ()=>{
    changeLoadingVisibility({display:'none' })
  }

  const carouselData = props.data;
  console.log(carouselData);
  console.log(carouselData[0].image_url);
  const renderCarousel = () => {
    let imageArray = [];

    imageArray.push(
      <div className="carousel-item active" data-bs-interval="3500">
        <img
          src={carouselData[0].image_url}
          className="d-block w-100 "
          alt="..."
          onLoad={()=>{
            hideLoading()
            showCarousel()
          }}
        ></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    );
    for (let i = 1; i < carouselData.length; i++) {
      imageArray.push(
        <div className="carousel-item" data-bs-interval="3500">
          <img
            src={carouselData[i].image_url}
            className="d-block w-100 "
            alt="..."
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      );
    }

    return imageArray;
  };

  return (
    <>

    <div class="d-flex justify-content-center " style={loadingVisibility}>
      <div class="spinner-border my-5" style={loadingVisibility}>
      </div>
    </div>


      <div
        id="carouselExampleCaptions"
        className="carousel carousel-dark slide w-100 my-4"
        data-bs-ride="carousel"
        style={carouselVisibility}
      >
        <div className="carousel-inner" >
          {renderCarousel()}
        </div>
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
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
