import React from 'react'
import Banner1 from '../../assets/carouselImages/2.webp'
import Banner2 from '../../assets/carouselImages/1.webp'
function HeroNew() {
  return (

    <div id="demo" class="carousel slide" data-bs-ride="carousel">

      <div class="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Banner1} alt="Los Angeles" class="d-block w-100" />
        </div>
        <div class="carousel-item">
          <img src={Banner2} alt="Chicago" class="d-block w-100" />
        </div>

      </div>


      <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  )
}

export default HeroNew