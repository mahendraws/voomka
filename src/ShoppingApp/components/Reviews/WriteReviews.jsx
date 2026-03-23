import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import "./Reviews.css";
import Rating from "react-star-rating-lite";
import Reviews from "./Reviews";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ShopContext } from "../../contexts/shopContextProvider";
import axios from "axios";
function WriteReviews({ currentProduct }) {
  const { isLogin, custID, cust_name } = useContext(ShopContext);
  const [writeReview, setWriteReview] = useState(false)
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: cust_name,
    rating: "",
    reviewTitle: "",
    bodyofReview: "",
    cust_id: custID,
    product_id: currentProduct
  });
  const notify = (mess) => toast(mess);
  // console.log(data.name);
  function sendData() {

    console.log(data);

    if (data.rating === 0 || data.bodyofReview.trim() === "" || data.reviewTitle.trim() === "") {
      notify("Please Enter All Fields")
      return;
    }

    axios
      .post(
        "http://localhost/voomka/frontend/review.php",
        data
      )
      .then(function (response) {
        notify("Review Added...")
        setWriteReview(false)
        console.log("from review insert .... ", response.data);
        //navigate('/');
      });

  }

  function checkWrite() {
    if (isLogin) {
      setWriteReview(true)
    } else {
      navigate('/Login');

    }

  }

  function onClickHandler(Val) {
    // console.log("Clint Slect Rating", Val);
    setData({ ...data, rating: Val });
  }
  return (
    <>
      <div>
        <div className="container MainBox2">
          <div>
            <div className="Main-heading">
              <h4>Customer Reviews</h4>
            </div>
            <div>
              <div>
                <p>
                  <Rating value="5" weight="23" className="m-3" />
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p style={{ color: "#455A64" }}>Based on 0 reviews</p>
                </div>
                <div>
                  <p style={{ color: "blue", textDecoration: "underline" }}><a href="javascript:void(0)" onClick={checkWrite}>Write a review</a></p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr />

            {writeReview ?
              <div>
                <div className="MainReview">


                  <div className="reviewFilds">
                    <div className="">

                      <input
                        type="text"
                        value={cust_name}
                        hidden
                      />
                      {/* Live :{data.name} */}
                    </div>
                    <div className="mt-3">

                      <input hidden
                        type="text"
                        placeholder="Email"
                        onChange={(e) => {
                          setData({ ...data, email: e.target.value });
                        }}
                      />
                    </div>
                    <div className="mt-3">
                      <p>
                        <span style={{ color: "#455A64" }}>Rating :</span>
                        <Rating weight="20" onClick={onClickHandler} />
                      </p>
                    </div>
                    <div className="mt-2">
                      <span style={{ color: "#455A64" }}>Review Title</span>
                      <input
                        type="text"
                        placeholder="Give Your Review Title"
                        onChange={(e) => {
                          setData({ ...data, reviewTitle: e.target.value });
                        }}
                      />
                    </div>
                    <div className="mt-3 mb-2 TEXTARA">
                      <p>
                        <span style={{ color: "#455A64" }}>
                          Body of Review (1500)
                        </span>
                      </p>
                      <textarea
                        type="text"
                        placeholder="Give Your Review Title here..."
                        onChange={(e) => {
                          setData({ ...data, bodyofReview: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-3 mb-3 review-Btn d-flex flex-row-reverse">
                    <button onClick={sendData}>SUBMIT REVIEW </button>
                  </div>
                </div>
              </div>
              : ""}



          </div>
          <div className="mt-4">
            <Reviews productId={currentProduct} />

            <hr />
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default WriteReviews;
