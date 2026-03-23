import React from "react";
import Carousel from "react-multi-carousel";
import Banner1 from '../../assets/carouselImages/banner1.jpg'
import Banner2 from '../../assets/carouselImages/banner2.jpg'
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Hero() {
  // Thi si Carousel Images
  const BannersData = [
    {
      url: Banner1,
    },
    {
      url: Banner2,
    },
   
  ];
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {BannersData.map((data,index) => (
          <img key={index} src={data.url} alt="img" width="100%" height="430px" />
        ))}
      </Carousel>
    </>
  );
}

export default Hero;
