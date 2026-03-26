import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbottom.css";

function Navbottom({ cartCount = 0 }) {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="navbottom ">
            <div className="container-fluid">
                <div className="row text-center">

                    <div
                        className={`col nav-item ${isActive("/") ? "active" : ""}`}
                        onClick={() => navigate("/")}
                    >
                        <img src="/icons/home.png" alt="Home" />
                        <p>Home</p>
                    </div>

                    <div
                        className={`col nav-item ${isActive("/AllProducts") ? "active" : ""}`}
                        onClick={() => navigate("/AllProducts")}
                    >
                        <img src="/icons/category.png" alt="AllProducts" />
                        <p>Product</p>
                    </div>

                    <div
                        className={`col nav-item ${isActive("/Addtocart") ? "active" : ""}`}
                        onClick={() => navigate("/Addtocart")}
                    >
                        <div className="icon-wrapper">
                            <img src="/icons/cart.png" alt="Cart" />
                            {cartCount > 0 && <span className="badge">{cartCount}</span>}
                        </div>
                        <p>Cart</p>
                    </div>

                    <div
                        className={`col nav-item ${isActive("/wishlist") ? "active" : ""}`}
                        onClick={() => navigate("/wishlist")}
                    >
                        <img src="/icons/wishlist.png" alt="Wishlist" />
                        <p>Wishlist</p>
                    </div>

                    <div
                        className={`col nav-item ${isActive("/account") ? "active" : ""}`}
                        onClick={() => navigate("/account")}
                    >
                        <img src="/icons/user.png" alt="Account" />
                        <p>Account</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbottom;