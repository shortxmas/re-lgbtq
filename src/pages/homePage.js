import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  const [carouselData,setCarouselData] = useState()
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://lgbtq-center-portal.vercel.app/api/carousel/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        console.log(jsonData[0].image_url)
        setCarouselData(jsonData);
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  const renderCarouselButtons = ()=>{
    let ret=[]
     for(var i=0;i<carouselData.length-1;i++){

      ret.push(
        <>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </>
      )
      
    };
  }

  const renderCarousel = ()=>{
    console.log(carouselData)

    let imageArray=[]

    imageArray.push(
    <div className="carousel-item active" data-bs-interval="3500">
        <img
          src={carouselData[0].image_url}
          className="d-block w-100 "
          alt="..."
        ></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>
            Some representative placeholder content for the first slide.
          </p>
        </div>
      </div>
    )
    for(let i=1;i<carouselData.length;i++){
      imageArray.push(
        <div className="carousel-item" data-bs-interval="3500">
          <img
            src={carouselData[i].image_url}
            className="d-block w-100 "
            alt="..."
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>
              Some representative placeholder content for the first slide.
            </p>
          </div>
        </div>
      )  
    }

    return imageArray

  }

  
  return loading ? (
    <div>
      hi
    </div>
    
  ):(
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
        rel="stylesheet"
      ></link>

      <Navbar />

      <div
        className="d-flex container justify-content-center  flex-column"
        style={{
          paddingTop: 100,
        }}
      >
        <div
          id="carouselExampleCaptions"
          className="carousel carousel-dark slide w-100 my-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">


            


          </div>

          <div className="carousel-inner">

            {renderCarousel()}
            {/* <div className="carousel-item  active" data-bs-interval="3500">
              <img
                src="https://lgbtq-center-portal.vercel.app/download/?name=website.File%2Fbytes%2Ffilename%2Fmimetype%2F1602117384175.png"
                className="d-block w-100 "
                alt="..."
              ></img>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3500">
              <img
                src="https://lgbtq-center-portal.vercel.app/download/?name=website.File%2Fbytes%2Ffilename%2Fmimetype%2FIMG_4640_yRFmWtk.png"
                className="d-block w-100 "
                alt="..."
              ></img>
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div> */}


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

        <div className="text-left my-4 " style={{ fontFamily: "Poppins" }}>
          {/* <div className='text-left my-4 'style={{fontFamily:'Poppins'}} data-sal="slide-down" data-sal-duration="1200"> */}
          <p>
            We are open to serve you through walk-in counter service and in
            person or Zoom appointments.
          </p>
          <p>
            Our center is open to provide you with assistance via Zoom,
            in-person, or over the phone, Monday-Friday from 9:00 am-5:00 pm.
          </p>
          <p>
            Our staff is available to provide resources, referrals and student
            support during regular business hours. To speak with Director
            Camaron Miyamoto, please make an appointment with this link:
            calendly.com/uhmlgbtqcalendar
          </p>

          <p>
            The LGBTQ+ Center Lounge is open during regular business hours.
            Reservations are not required.
          </p>
          <h3 className="fw-bold">PURPOSE</h3>
          <p>
            Lesbian, Gay, Bisexual, Transgender & Queer+ (LGBTQ+) Center works
            to eliminate systemic barriers to academic excellence and student
            success, strives to maintain a safe and inclusive campus environment
            that is free from harassment and discrimination, an seeks to affirm
            LGBTQ+ and māhū people across our campus community. Our purpose is
            to empower students to create healthy living-learning communities,
            enhance interpersonal growth, and celebrate academic achievement. We
            offer daily direct services, support and referrals via Zoom
            appointment and on the phone, M-F, 9:00am-5:00pm.
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
};
