import React, { useState,useEffect,useContext } from "react";

import "./Addtocart.css";
import axios from "axios";
import { ShopContext } from "../../contexts/shopContextProvider";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

function Addtocart() {
  const {deleteCartItem,cartProduct,setTotalPrice,totalPrice,getTotalCartItems,updateQuantity} = useContext(ShopContext)
const navigate = useNavigate()
useEffect(()=>{
  //getTotalCartItems()

},[])
  return (
    <div className="">
      <div className="container">
        <div>
          <div className="Heading-Cart">
            <div>
              <h4>Your Cart</h4>
            </div>
            <div>
              <p>CONTINUE SHOPPING</p>
            </div>
          </div>

          <div className="Product">
            <div>
              <p>PRODUCT</p>
            </div>
         
            <div>
              <p>  QUANTITY - TOTAL</p>
            </div>
          </div>
        </div>
        <hr />
{cartProduct.map((item,index)=>{ return <Cart key={index} order_id={item.order_id} ind={index} deleteCartItem={deleteCartItem} title={item.title} price={Number(item.amount)} url={item.url} quantity={Number(item.quantity)} setTotalPrice={setTotalPrice} updateQuantity={updateQuantity}/>})}
                   
                  
{(totalPrice)?<>
        <hr />

        <div class="totalPrice">
          <div>
            <h5>Total:₹ {totalPrice}</h5>
          </div>
        </div>

        <div className="checkout">
              <button onClick={()=>{navigate("/Checkout")}}>CHECK OUT</button>
        </div>
        </>:<>
        <h1 class="text-center">Your Cart Is Empty</h1>
        <hr/>
        </>
}


      </div>
    </div>
  );
}

export default Addtocart;
