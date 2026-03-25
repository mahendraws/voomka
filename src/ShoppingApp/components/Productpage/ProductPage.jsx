import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { ShopContext } from "../../contexts/shopContextProvider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Rating from "react-star-rating-lite";
import Benefits from "./Benefits";
import Ingredients from "./Ingredients";
import HowToUseSection from "./HowToUseSection";
import ProductDetails from "./ProductDetails";
import WriteReviews from "../Reviews/WriteReviews"
import "./style.css";

import { useParams } from "react-router-dom";

import minus from "../../assets/images/minus.png";
import add from "../../assets/images/plus.png";


function ProductPage() {
  const navigate = useNavigate();
  const id = useParams();



  const [form, setForm] = useState({
    category_id: "",
    product_name: "",
    price: "",
    stock: "",
    status: "active",
    type: "",        // ✅ NEW
    fabric: ""       // ✅ NEW
  });

  const [description, setDescription] = useState("");
  const [existingImages, setExistingImages] = useState([]);




  //let currentProduct = Number(sProduct.id) - 1;
  // const currentProduct = props.productId;
  // console.log("current product...." + currentProduct);

  const { filterreviews, addToCart, isLogin } = useContext(ShopContext);

  const [num, SetNum] = useState(1);
  const incriment = () => {
    if (form.stock > num) SetNum(num + 1);
  };
  const decriment = () => {
    if (num > 1) {
      SetNum(num - 1);
    }
  };

  const addCart = (id, quantity) => {
    if (!isLogin) {
      navigate("/Login");
    } else {
      addToCart(id, quantity);
    }
  };


  const buyNow = (id) => {
    addToCart(id, 1);
    navigate("/CheckoutMain");
  }

  // Fetch product
  useEffect(() => {
    fetch(`http://localhost/voomka/dashboard/api/products/get.php?id=${id.id}`)
      .then(res => res.json())
      .then(data => {
        setForm({
          category_id: data.product.category_id,
          product_name: data.product.product_name,
          price: data.product.price,
          stock: data.product.stock,
          status: data.product.status,
          type: data.product.type,
          fabric: data.product.fabric
        });
        setDescription(data.product.description);
        setExistingImages(data.images);
      });
  }, [id]);



  return (
    <>
      <div className="container main-comtainer pcontainer">
        <div class="carousel-wrapper main2-Container ">
          <div class="">
            <Carousel>
              {//console.log(existingImages)
              }
              {existingImages.map((image, index) => (
                <div key={index}>
                  <img src={`https://voomka.in/dashboard/api/uploads/${image.image_name}`} alt={image.image_name} />
                </div>
              ))}

            </Carousel>
          </div>
        </div>

        <div className="rightMenu col-md-6">
          <h2>{form.product_name}</h2>
          <p>
            <span style={{ fontWeight: "700", fontSize: "20px" }}>
              ₹{form.price}
            </span>

            <span style={{ fontWeight: "700", fontSize: "15px" }}>
              <s className="mx-2" style={{ color: "gray" }}>

                ₹{(Number(form.price) * 30 / 100) + Number(form.price)}
              </s>
            </span>
            <span className="mx-2">Tax included. Shipping Free.</span>

            <div className="d-flex">
              <div>
                <Rating value="5" weight="18" className="m-3" />
              </div>
              <div className="mx-1">
                <span
                  style={{
                    fontSize: "14px",
                  }}
                >
                  <a href="#reviewSection">( {filterreviews.length} TOTAL REVIEWS )</a>
                  {/* <Link to="#reviewSection"> ( {filterreviews.length} TOTAL REVIEWS )</Link> */}
                </span>
              </div>
            </div>
          </p>


          {form.stock > 1 ?
            <div>
              <p style={{ color: "gray" }}>QUANTITY</p>
              <div className="ProductRange">
                <div>
                  <img
                    onClick={decriment}
                    src={minus}
                    alt=""
                    width="18px"
                    style={{ marginTop: "10px", cursor: "pointer" }}
                  />
                </div>
                <div>
                  <span>{num}</span>
                </div>
                <div>
                  <img
                    onClick={incriment}
                    src={add}
                    alt=""
                    width="18px"
                    style={{ marginTop: "10px", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div> : ""
          }


          <ProductDetails ProductDescription={description} />
          <div className="Bynow-btn">
            <div>
              <button
                onClick={() => {
                  addCart(id.id, num);
                }}
              >
                ADD TO CART
              </button>
            </div>
            <div className="Bynow-btn2">

              <button onClick={() => {
                if (!isLogin) {
                  navigate("/Login");
                } else {
                  addCart(id.id, num);
                  navigate("/Checkout");
                }

              }}>BUY IT NOW</button>

            </div>
          </div>
        </div>
      </div>



      {/*Review Section starts*/}
      <div id="reviewSection"></div>
      <WriteReviews currentProduct={id} />

      {/*Review Section Ends*/}

      {/* Talk to our Expert section start */}
      <div>
        <div className="main-Container expert">
          <div className="left-Box">
            <h2
              className="mt-4 mb-4"
              style={{
                color: "rgba(53, 53, 53, 1)",
                fontSize: "36px",
                fontWeight: "600",
              }}
            >
              Talk to our Expert
            </h2>
            <p style={{ fontSize: "25px" }}>
              Our trusted Experts can help you choose the right
            </p>
            <p style={{ fontSize: "25px" }}>Fashion For You.</p>
            <button className="BTN">+91 7887769868</button>
          </div>

        </div>
      </div>
      {/* Talk to our Expert section End */}

      {/* Reviews Components start here */}

      {/* Reviews Components End here */}
    </>
  );
}

export default ProductPage;
