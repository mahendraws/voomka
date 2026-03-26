import React, { useState } from "react";
import "./ReviewSliders.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "react-star-rating-lite";
function ReviewSliders() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
        <h4 className="text-center mb-4 ">Trusted by <b>More</b> Customers</h4>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="p-3">
              <div className="main-reviews-box">
                <span className="heading-text">
                  <h5>Sudhanshu Gaikwad</h5>
                </span>
                <p>
                  <Rating value="4" weight="15px" readonly />
                </p>
                <span>
                  <p>
                    Great experience with Voomka. Highly recommended!
                  </p>
                </span>
              </div>
            </div>

            <div className="p-3">
              <div className="main-reviews-box">
                <span className="heading-text">
                  <h5>Vishaka More</h5>
                </span>
                <p>
                  <Rating value="4" weight="15px" readonly />
                </p>
                <span>
                  <p>
                    Great experience with Voomka. Highly recommended!
                  </p>
                </span>
              </div>
            </div>

            <div className="p-3">
              <div className="main-reviews-box">
                <span className="heading-text">
                  <h5>Aniket Kadam</h5>
                </span>
                <p>
                  <Rating value="4" weight="15px" readonly />
                </p>
                <span>
                  <p>
                    Great experience with Voomka. Highly recommended!
                  </p>
                </span>
              </div>
            </div>

            <div className="p-3">
              <div className="main-reviews-box">
                <span className="heading-text">
                  <h5>Sony Fitore</h5>
                </span>
                <p>
                  <Rating value="4" weight="15px" readonly />
                </p>
                <span>
                  <p>
                    Great experience with Voomka. Highly recommended!
                  </p>
                </span>
              </div>
            </div>

            <div className="p-3">
              <div className="main-reviews-box">
                <span className="heading-text">
                  <h5>Aakash Chopra</h5>
                </span>
                <p>
                  <Rating value="4" weight="15px" readonly />
                </p>
                <span>
                  <p>
                    Great experience with Voomka. Highly recommended!
                  </p>
                </span>
              </div>
            </div>

            <div className="p-3">
              <div className="main-reviews-box">
                <span className="heading-text">
                  <h5>Sattu devangan</h5>
                </span>
                <p>
                  <Rating value="4" weight="15px" readonly />
                </p>
                <span>
                  <p>
                    Great experience with Voomka. Highly recommended!
                  </p>
                </span>
              </div>
            </div>




          </Slider>
        </div>
      </div>
    </>
  );
}

export default ReviewSliders;
