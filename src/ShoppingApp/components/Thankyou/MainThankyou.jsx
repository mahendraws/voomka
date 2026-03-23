import React from "react";

import { useLocation } from "react-router-dom";
import "./MainThankyou.css";
import success from "../../assets/images/check-mark.png";
import ThankyouPayment from "./ThankyouPayment";
import OrderDetails from "./OrderDetails";
function MainThankyou() {
  const location = useLocation()

  return (
    <>
      <div>
        <div className="container mt-4  Main-thankYou">
          {/* This is an a heading */}
          <div>
            <p className="Heading-text">Order Recevied</p>
          </div>
          {/* order information */}
          <div className="Thank-box">
            <div>
              <img className="p-3" src={success} width="70px" alt="" />
            </div>
            <div>
              <p>Thank You , Your order has been received..!</p>
            </div>
          </div>
{console.log(" payment id from console.......      "+location.state.razorpay_payment_id)}
          <ThankyouPayment orderid={location.state.razorpay_order_id} paymentid={location.state.razorpay_payment_id}/>

          <div className="OrderDetails">
            <div>
              <p className="Heading-text">Order Details</p>
            </div>

            <div>


<OrderDetails orderid={location.state.razorpay_order_id} paymentid={location.state.razorpay_payment_id}/>


              

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainThankyou;
