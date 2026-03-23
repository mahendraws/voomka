import React from "react";
import "./Nopage.css";
function Nopage() {
  return (
    <>
      <div className="container text-center">
        <img
          className="mt-4 mb-4"
          width="500px"
          src="https://freefrontend.com/assets/img/html-funny-404-pages/SVG-Animation-404-Page.gif"
          alt=""
        />
        <div className="mt-4 mb-4 Home-btn">
          <button>GO TO HOME</button>
        </div>
      </div>
    </>
  );
}

export default Nopage;
