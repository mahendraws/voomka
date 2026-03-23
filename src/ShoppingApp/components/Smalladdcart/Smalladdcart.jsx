import React from "react";
import { Link } from "react-router-dom";
import "./Smalladdcart.css";
import product from "../../assets/ProductsImages/ayurvedictreatmentmadhumokshavatifordiabetes_500x.jpg";
import close from "../../assets/images/close.png";
function Smalladdcart() {
  return (
    <>
      <div>
        <div className="Main-Box">
          <div className="d-flex justify-content-between">
            <div>
              <p style={{ fontSize: "22px" }}>Item added to your cart</p>
            </div>
            <div>
              <img
                style={{ cursor: "pointer" }}
                src={close}
                alt=""
                width="20px"
              />
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <div>
              <img src={product} alt="" width="100px" />
            </div>
            <div>
              <span style={{ color: "green", fontWeight: "600" }}>
                Spirulina Capsule with Ashwagandha
              </span>
              <p className="mt-2" style={{ color: "#8a8e90" }}>
                Size: Pack of 1
              </p>
            </div>
          </div>

          <div className="View-btn">
            <div className="Viewbtn01">
              <button>VIEW MY CART (1)</button>
            </div>

            <div className="Viewbtn02">
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Smalladdcart;
