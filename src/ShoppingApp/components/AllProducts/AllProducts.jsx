import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../contexts/shopContextProvider";
import "./Allproducts.css";
import Cart from "../Cart";
function AllProducts() {
  const usenavigate = useNavigate();
  const { allProducts, addToCart, isLogin } = useContext(ShopContext)



  return (
    <>
      <h3 className="text-center text-success m-5">Shop By Product</h3>
      <br></br>
      <div className="container mt-4 ">
        <div className="row row-cols-1 row-cols-md-3">

          {allProducts.map((val, index) => {
            return (
              <div key={index}>
                <div className="col mb-4" >
                  <Cart val={val} key={index} />

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllProducts;
