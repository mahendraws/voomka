import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b1 from '../../../assets/images/b1.jpg'
import b2 from '../../../assets/images/b1.jpg'
import b3 from '../../../assets/images/b1.jpg'
import b4 from '../../../assets/images/b1.jpg'
function Benefit() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container" id="Main-Box">
        <h2 className="text-center mb-4 text-success">Benefits of <b>Ayurveda</b> </h2>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="p-3">
              <div className="main-reviews-box">
                <span className="heading-text">
                    <img src={b1} alt="s"/>
                  <h4>Improve the Quality of Your Daily Life</h4>
               
                </span>
              </div>
            </div>

            <div className="p-3">
              <div className="main-reviews-box">
                <span className="heading-text">
                    <img src={b2} alt="s"/>
                  <h4>No side Effect</h4>
               
                </span>
              </div>
            </div>

            <div className="p-3">
              <div className="main-reviews-box">
                <span className="heading-text">
                    <img src={b3} alt="s"/>
                  <h4>Better Cure</h4>
               
                </span>
              </div>
            </div>

            <div className="p-3">
              <div className="main-reviews-box">
                <span className="heading-text">
                    <img src={b4} alt="s"/>
                  <h4>Physical and Mental Health</h4>
               
                </span>
              </div>
            </div>



          </Slider>
        </div>
      </div>
    </>
  );
}

export default Benefit;
