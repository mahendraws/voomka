import React from "react";
import "./style.css";
function Benefits({ bebefits, imgurl }) {
  return (
    <>
      <div class="card mx-3 Cart">
        <div class="card-body">
          <img src={imgurl} class="card-img-top rounded-circle" alt="..." />
          <h5 class="card-title text-center mt-2 mb-2">{bebefits}</h5>
        </div>
      </div>
    </>
  );
}

export default Benefits;
