import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from "../../contexts/shopContextProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }) => {

    const navigate = useNavigate()

    const { addToCart, isLogin } = useContext(ShopContext)

    const addCart = (id) => {
        if (!isLogin) {
            navigate("/Login");
        } else {

            addToCart(id, 1)
            //alert("Product Added")
            // notify("Product Added to Cart")
        }


    }

    const notify = (mess) => toast(mess);

    return (
        <div className="col-md-3 col-6 mb-4" >

            <div className="card h-100 shadow-sm">

                {/* Lazy loaded image */}
                <img
                    src={`https://voomka.in/dashboard/api/uploads/${product.image_name}`}
                    className="card-img-top"
                    alt={product.product_name}
                    loading="lazy"
                    style={{
                        height: "220px",
                        objectFit: "cover"
                    }}

                    onClick={() => {
                        navigate(`/AllProducts/${product.product_id}`);
                    }}
                />

                <div className="card-body d-flex flex-column">

                    <h5 className="card-title">
                        {product.product_name}
                    </h5>

                    <p className="card-text text-success fw-bold">
                        ₹{product.price}
                    </p>

                    <div className="mt-auto d-grid gap-2">

                        <button className="btn btn-dark text-white" onClick={() => {
                            addCart(product.product_id)
                        }}>
                            Add to Cart
                        </button>



                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProductCard;
