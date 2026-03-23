import React from "react";

import "./CheckoutMain.css";
function ProductDetails({ imgurl, title, price, quantity }) {
  return (
    <>
      <div className="Main-Product">
        <div className="Main-cart ">
          <div className="ITEMS">
            <div>
              <img src={`http://localhost/voomka/dashboard/api/uploads/${imgurl}`} width="50px" alt="" />

            </div>
            <div>
              <p className="title mx-3">{title}</p>
              <span className="quantity">{quantity}</span>
            </div>
          </div>

          <div className="Right-Amount">
            <p> ₹{price * quantity} </p>
          </div>
        </div>
        <hr />

      </div>
    </>
  );
}

export default ProductDetails;
