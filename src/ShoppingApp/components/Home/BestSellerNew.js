import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestSellerNew.css"
import { ShopContext } from "../../contexts/shopContextProvider";

import axios from "axios";
import ProductCard from "../AllProducts/ProductCard";

function BestSellerNew() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const { allProducts, addToCart, isLogin } = useContext(ShopContext)
  const limit = 6;

  const buildUrl = (customOffset = 0) => {

    let url = `https://voomka.in/dashboard/api/products/products.php?limit=${limit}&offset=${customOffset}`;
    return url;

  };


  const loadProducts = async (reset = false, customOffset = 0) => {




    let url = buildUrl(customOffset);

    //alert(url)
    try {

      const res = await axios.get(url);

      const newProducts = res.data.data;
      console.log(res.data.data)
      setProducts(res.data.data);




    } catch (error) {
      console.error(error);
    }


  };

  useEffect(() => {
    loadProducts(true);
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      <div className="container" id="Main-Box2">

        <div className="row">
          <div className="slider-container">

            <Slider {...settings}>
              {products.map(product => (

                <div >
                  <div style={{ padding: "20px" }}>

                    <div class="image-holder">
                      <img
                        src={`https://voomka.in/dashboard/api/uploads/${product.image_name}`}
                        className="card-img-top"
                        alt={product.product_name}
                        loading="lazy"
                        style={{
                          height: "220px",
                          objectFit: "cover"
                        }}


                      />
                    </div>
                    <div class="banner-content py-4">
                      <h5 class="element-title text-uppercase">
                        <a href="#" class="item-anchor" onClick={() => {
                          navigate(`/AllProducts/${product.product_id}`);
                        }}>{product.product_name}</a>
                      </h5>
                      Rs {product.price}
                      <div class="btn-left">
                        <a onClick={() => {
                          navigate(`/AllProducts/${product.product_id}`);
                        }} class="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                      </div>
                    </div>
                  </div>

                </div>

              ))}
            </Slider>

          </div>
        </div>
      </div>
    </>
  );
}

export default BestSellerNew;
