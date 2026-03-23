import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import "./SearchBox.css";
// Cosum Icons
import close from "../../assets/images/close.png";
import logo from '../../assets/images/logo.jpg'
import search from "../../assets/images/loupe.png";
import user from "../../assets/images/user.png";
import addtocart from "../../assets/images/cart.png";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../contexts/shopContextProvider";
function Navigation() {
  const [width, setWidth] = useState(window.innerWidth);
  const { cust_name, setCustName, setLogin, isLogin, cartItems, setCartProduct, setCustID, cartProduct } = useContext(ShopContext)
  // console.log(searchBox);
  const navigate = useNavigate()

  const logout = () => {
    setLogin(false);
    setCustID(0)
    setCartProduct([]);
    setCustName("")
  }



  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);





  return (
    <>

      <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">  <img
            src={logo}
            width="120px"
            alt="Logo"
          /></a>
          <div>
            {width < 600 ? <Link to="/Addtocart">
              {cartProduct.length}
              <img src={addtocart} alt="Add To Cart" width="25px" />
            </Link> : ""}


          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ms-auto" style={{ alignItems: "center" }}>
              <Link to="/Home">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/Aboutus">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us                </a>
                </li>
              </Link>
              <Link to="/AllProducts">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Shop
                  </a>
                </li>
              </Link>
              <li className="nav-item dropdown">
                <a style={{ display: "flex", alignItems: "center" }} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  {cust_name} <img
                    className="nav-link"
                    style={{ marginTop: "-9px" }}
                    src={user}
                    alt="Login"
                    width="40px"
                  />

                </a>
                <ul className="dropdown-menu " id="dmenu" style={isLogin ? { left: "0px" } : { left: "-80px" }}>
                  {
                    (isLogin) ? <>
                      <Link to="/my-orders" className="items">My Orders</Link>
                      <Link to="/Profile" className="items">Profile</Link>
                      <Link to="/Home" className="items" onClick={logout}>Logout</Link></>
                      :
                      <Link to="/Login" className="items">Login</Link>
                  }
                </ul>
              </li>

              <Link to="/Addtocart">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {cartProduct.length}
                    <img src={addtocart} alt="Add To Cart" width="25px" />
                  </a>
                </li>
              </Link>

            </ul>
          </div>
        </div>
      </nav>


    </>
  );
}

export default Navigation;
