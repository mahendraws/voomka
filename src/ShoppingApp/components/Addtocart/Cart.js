import React, { useEffect, useState } from 'react'

import Delete from "../../assets/images/delete.png";
import minus from "../../assets/images/minus.png";
import add from "../../assets/images/plus.png";

function Cart({ order_id, ind, title, price, url, quantity, setTotalPrice, deleteCartItem, updateQuantity }) {



  return (


    <div className="Product-info ">
      <div className="Product-item">
        <img src={`https://voomka.in/voomka/dashboard/api/uploads/${url}`} alt="" width="100px" />
        <div className="mt-4">
          <p style={{ color: "green" }}>{title}</p>
          <p>
            <b>₹</b> {price} /-
          </p>
          <p>Size : Pack of 1</p>
        </div>
      </div>

      <div>
        <div className="Range">
          <div className="ProductRange">
            <div>
              <img
                onClick={() => { updateQuantity(1, order_id) }}
                src={minus}
                alt=""
                width="18px"
                style={{ marginTop: "10px", cursor: "pointer" }}
              />
            </div>
            <div>
              <span>{quantity}</span>
            </div>
            <div>
              <img
                onClick={() => { updateQuantity(0, order_id) }}
                src={add}
                alt=""
                width="18px"
                style={{ marginTop: "10px", cursor: "pointer" }}
              />
            </div>
          </div>
          <button className="mx-2" onClick={() => { deleteCartItem(order_id) }}>
            <img src={Delete} alt="" width="23px" />
          </button>
        </div>
        <div className="LastPrice">
          <p>
            <b>₹</b> {quantity * price} /-
          </p>
        </div>

      </div>

    </div>


  )
}

export default Cart