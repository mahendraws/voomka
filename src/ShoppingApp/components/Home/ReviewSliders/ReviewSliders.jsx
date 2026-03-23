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
        <h2 className="text-center mb-4 ">Trusted by <b>More</b> Customers</h2>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="p-3">
              <div className="main-reviews-box">
                <span className="heading-text">
                  <h4>Sudhanshu Gaikwad</h4>
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
                  <h4>Sudhanshu Gaikwad</h4>
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
                  <h4>Sudhanshu Gaikwad</h4>
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
                  <h4>Sudhanshu Gaikwad</h4>
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
                  <h4>Sudhanshu Gaikwad</h4>
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
                  <h4>Sudhanshu Gaikwad</h4>
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
                  <h4>Sudhanshu Gaikwad</h4>
                </span>
                <p>
                  <Rating value="4" weight="15px" readonly />
                </p>
                <span>
                  <p>
                    Regarding my medications everything is parfect.I am feeling
                    so well and good within one week.
                  </p>
                </span>
              </div>
            </div>

            <div className="p-3">
              <div className="main-reviews-box">
                <span className="heading-text">
                  <h4>Sudhanshu Gaikwad</h4>
                </span>
                <p>
                  <Rating value="4" weight="15px" readonly />
                </p>
                <span>
                  <p>
                    Regarding my medications everything is parfect.I am feeling
                    so well and good within one week.
                  </p>
                </span>
              </div>
            </div>

            <div className="p-3">
              <div className="main-reviews-box">
                <span className="heading-text">
                  <h4>Sudhanshu Gaikwad</h4>
                </span>
                <p>
                  <Rating value="4" weight="15px" readonly />
                </p>
                <span>
                  <p>
                    Regarding my medications everything is parfect.I am feeling
                    so well and good within one week.
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
