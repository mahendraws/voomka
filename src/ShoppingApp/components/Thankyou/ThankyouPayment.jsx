import React, { useContext, useState } from "react";
import { ShopContext } from "../../contexts/shopContextProvider";
function ThankyouPayment({ orderid, paymentid }) {
  const { totalPrice } = useContext(ShopContext)
  const [totalPriceCopy, setTP] = useState(totalPrice)
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  const saveCustomerLocation = (orderId) => {

    navigator.geolocation.getCurrentPosition((pos) => {

      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      fetch("https://voomka.in/dashboard/api/delivery/update-location.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          order_id: orderId,
          user_type: "customer",
          lat,
          lng
        })
      });

    }, (err) => {
      console.log("Location denied", err);
    });

  };

  saveCustomerLocation(orderid)

  return (
    <>
      <div className="main-payment-Box">
        <div>
          <p>Order Number:</p>
          <span>{orderid}</span>
        </div>
        <div>
          <p>Date:</p>
          <span>{getDate()}</span>
        </div>
        <div>
          <p>Total:</p>
          <span>₹ {totalPriceCopy}</span>
        </div>
        <div>
          <p>Payment method:</p>
          {paymentid == "cod" ? <span>COD</span> : <span>Online</span>}

        </div>
      </div>
    </>
  );
}

export default ThankyouPayment;
