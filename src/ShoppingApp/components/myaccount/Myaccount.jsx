
import './Myaccount.css'
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from "../../contexts/shopContextProvider";
import { Menu, Phone, ChevronRight, MoveDiagonal, CircleEllipsis, MapPin, FileText, UserPen, CornerDownLeft, HatGlasses } from 'lucide-react';

function Myaccount() {
    const { cust_name, setCustName, setLogin, isLogin, cartItems, setCartProduct, setCustID, cartProduct } = useContext(ShopContext)
    const navigate = useNavigate()

    const logout = () => {
        setLogin(false);
        setCustID(0)
        setCartProduct([]);
        setCustName("")
        navigate("/Home")
    }

    return (
        <div class="myaccount">
            {!isLogin ?
                <div class="welcome text-center">
                    <h4>Welcome Guest</h4>
                    <p>Please Login to access more feature</p>
                    <button class="btn btn-dark" onClick={() => { navigate("/Login") }}>Login</button>
                </div>
                :

                <div class="profile-header">
                    <div class="avatar">
                        <span class="avatar-text">U</span>
                    </div>
                    <div class="user-info">
                        <h6 class="user-name">{cust_name}</h6>
                        <p class="user-phone">8485856253</p>
                    </div>
                </div>
            }


            <div class="menu-list mt-3">
                {isLogin ? <>
                    <div class="menu-item" onClick={() => { navigate("/my-orders") }}>
                        <div class="menu-icon">
                            <Menu />
                        </div>
                        <div class="menu-content">
                            <h6 class="menu-title">Orders</h6>
                            <p class="menu-subtitle">Track your orders here</p>
                        </div>
                        <div class="menu-arrow">
                            <ChevronRight />
                        </div>
                    </div>

                    <div class="menu-item" onClick={() => { navigate("/Profile") }}>
                        <div class="menu-icon">
                            <UserPen />
                        </div>
                        <div class="menu-content">
                            <h6 class="menu-title">Profile</h6>
                            <p class="menu-subtitle">Manage Your Profile here</p>
                        </div>
                        <div class="menu-arrow">
                            <ChevronRight />
                        </div>
                    </div>
                </>

                    : ""}

                <div class="menu-item">
                    <div class="menu-icon">
                        <Phone />
                    </div>
                    <div class="menu-content">
                        <h6 class="menu-title">Contact Us</h6>
                        <p class="menu-subtitle">Get help and support</p>
                    </div>
                    <div class="menu-arrow">
                        <ChevronRight />
                    </div>
                </div>



                <div class="menu-item">
                    <div class="menu-icon">
                        <CircleEllipsis />
                    </div>
                    <div class="menu-content">
                        <h6 class="menu-title">FAQ</h6>
                        <p class="menu-subtitle">Frequently asked questions</p>
                    </div>
                    <div class="menu-arrow">
                        <ChevronRight />
                    </div>
                </div>

                <div class="menu-item">
                    <div class="menu-icon">
                        <MapPin />
                    </div>
                    <div class="menu-content">
                        <h6 class="menu-title">Store Locator</h6>
                        <p class="menu-subtitle">Find stores near you</p>
                    </div>
                    <div class="menu-arrow">
                        <ChevronRight />
                    </div>
                </div>

                <div class="menu-item">
                    <div class="menu-icon">
                        <FileText />
                    </div>
                    <div class="menu-content">
                        <h6 class="menu-title">Terms & Conditions</h6>
                        <p class="menu-subtitle">Read our terms and conditions</p>
                    </div>
                    <div class="menu-arrow">
                        <ChevronRight />
                    </div>
                </div>


                <div class="menu-item">
                    <div class="menu-icon">
                        <HatGlasses />
                    </div>
                    <div class="menu-content">
                        <h6 class="menu-title">Privacy Policy</h6>
                        <p class="menu-subtitle">Our privacy and data policy</p>
                    </div>
                    <div class="menu-arrow">
                        <ChevronRight />
                    </div>
                </div>

                <div class="menu-item">
                    <div class="menu-icon">
                        <CornerDownLeft />
                    </div>
                    <div class="menu-content">
                        <h6 class="menu-title">Return Policy</h6>
                        <p class="menu-subtitle">Our return policy</p>
                    </div>
                    <div class="menu-arrow">
                        <ChevronRight />
                    </div>
                </div>

                {isLogin ?
                    <button className='btn btn-dark' onClick={logout}>Logout</button>
                    : ""}
            </div>
        </div>




    )
}

export default Myaccount