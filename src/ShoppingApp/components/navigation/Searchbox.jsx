import React from "react";
import "./SearchBox.css";
import close from "../../assets/images/close.png";
function Searchbox() {
  return (
    <div>
      <div className="SearchBox">
        <div className="Sbox">
          <div>
            <input type="search" placeholder="Search..." />
          </div>
          <div>
            <img className="mx-3 mt-1" src={close} width="20px" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbox;
