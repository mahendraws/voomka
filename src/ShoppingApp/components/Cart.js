import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from "../contexts/shopContextProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Cart({val}) {
    const navigate = useNavigate()

    const {addToCart,isLogin} = useContext(ShopContext)

    const addCart=(id)=>{
        if(!isLogin)
        {
            navigate("/Login");
        }else{
         
          addToCart(id,1)
          //alert("Product Added")
         // notify("Product Added to Cart")
        }
      
      
      }

      const notify = (mess) => toast(mess);
  return (
    <div>
<div
                    className="card-group"
                    style={{ width: "80%", cursor: "pointer",textAlign:"center" }}
                  >
                    <div className="card" style={{border: "0.5px solid #e3e0e0"}} >
                      <div>
                      <img
                        src={val.productImages[0]}
                        className="card-img-top imgw"
                        alt="..."
                        onClick={() => {
                          navigate(`/AllProducts/${val.productId}`);
                        }}
                      />
</div>

                      <div className="card-body">
                        <h6 className=" text-center mb-2">
                          <b>{val.title}</b>
                        </h6>
                        <div className="  text-center ">
                          <div className="card-text mb-2">
                            <span>From ₹ {val.price}</span>
                            <span
                              style={{
                                color: "gray",
                                fontSize: "15px",
                                fontWeight: "600",
                              }}
                            >
                              <s> ₹ {val.regularPrice}</s>
                            </span>
                            <span className="offertext"> SAVE 11%</span>
                          </div>
                          <div className="card-text Addtocart">
                            <button onClick={()=>{addCart(val.productId)}}> Add To Cart </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ToastContainer autoClose={1000}/>
    </div>
  )
}

export default Cart