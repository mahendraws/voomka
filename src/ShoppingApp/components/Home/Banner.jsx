import React from "react";
import h2 from '../../assets/images/h2.jpg'

import { useEffect } from "react";
import BestSellerNew from "./BestSellerNew";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Banner() {


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

            <div className="container-fluid">


                <div className="logo">
                    <img src="/logo.png" width="100px" />
                </div>

                <div className="row" style={{ padding: "0px" }}>
                    <div className="slider-container">

                        <Slider {...settings}>
                            <div className="homebanner"><img src="/banner/baner1.jpg" className="img-fluid" /></div>
                            <div className="homebanner"><img src="/banner/baner2.jpg" className="img-fluid" /></div>
                        </Slider>

                    </div>
                </div>


            </div>


            <div class="container-fluid mt-4" style={{ backgroundColor: "#ffefef" }}>

                <div class="row text-center">

                    <div class="col text-center">
                        <img className="img-fluid" src={h2} alt="delivered in 2 hours at ch sambhaji nagar, voomka" />


                    </div>


                </div>

            </div>


            <section id="billboard" className="bg-light py-5" style={{ position: "relative" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <h4 className="section-title text-center mt-4" >New Collections</h4>
                        <div className="col text-center" >
                            <p>Our latest collections...</p>
                        </div>
                    </div>
                    <div className="row">

                        <BestSellerNew />
                    </div>
                </div>
            </section>


        </>
    );
}

export default Banner;