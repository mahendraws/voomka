import React from "react";
import "./style.css";
function Ingredients({ heading, imgurl, info }) {
  return (
    <>
      <div class="card mx-3 Cart2">
        <div class="card-body">
          <p>{heading}</p>
          <img src={imgurl} class="card-img-top rounded-circle" alt="..." />
          <h5 class="card-title text-center mt-2 mb-2">
            <b>{info}</b>
          </h5>
        </div>
      </div>
    </>
  );
}

export default Ingredients;
