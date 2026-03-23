import React from "react";
import HeroNew from "./HeroNew";

import Products from "../AllProducts/Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Drsliders/Drsliders.css'
import ReviewSliders from './ReviewSliders/ReviewSliders'
import Banner from './Banner';
import BookAppointment from './BookAppointment';
import Categories from './Categories';
import FindBest from './FindBest';
import BestSelling from './BestSelling';
function Home() {
  return (
    <>
      <HeroNew />

      <Banner />
      <BookAppointment />
      <Categories />
      <FindBest />
      <BestSelling />
      <ReviewSliders />
    </>
  );
}

export default Home;
