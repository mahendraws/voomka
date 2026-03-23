import React, { useEffect, useState } from "react";
import Rating from "react-star-rating-lite";
import axios from "axios";
import { ShopContext } from "../../contexts/shopContextProvider";
import { useContext } from "react";
function Reviews(props) {

  const { filterreviews, setFilterreviews } = useContext(ShopContext)

  useEffect(() => {
    console.log(props.productId)

    axios
      .post(
        "http://localhost/voomka/frontend/getReview.php",
        { product_id: props.productId }
      )
      .then(function (response) {
        console.log("from profile .... ", response.data);
        setFilterreviews(response.data)
        //return response.data;
      });

    // createOrder()
  }, [])

  return (
    <div>
      <div className="container MainRevies">
        {filterreviews.map((val, index) => (
          <div key={index}>
            <hr />
            <p>
              <Rating weight="18" value={Number(val.rating)} readonly />
            </p>
            <p style={{ color: "green", fontWeight: "600", lineHeight: "8px" }}>
              {val.title}
            </p>
            <p className="mb-1" style={{ fontSize: "14px" }}>
              <b>By: {val.name}</b> {/*on <b>{val.user_email}</b>*/}
            </p>
            <p style={{ fontSize: "14px", color: "" }}>{val.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
