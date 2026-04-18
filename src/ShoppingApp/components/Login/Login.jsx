import React, { useContext, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ShopContext } from "../../contexts/shopContextProvider";

function Login() {
  const navigate = useNavigate();
  const { setCustName, setLogin, setCustID, setCartProduct, getTotalCartItemsLogin } = useContext(ShopContext)
  const [logininfo, setLoginInfo] = useState({
    mobile: "",
    password: "",
  });

  function sendInfo() {
    console.log(logininfo);
  }

  // console.log(logininfo.email);

  function sendData(e) {
    e.preventDefault();
    axios
      .post("https://voomka.in/frontend/login.php", logininfo)
      .then(function (response) {
        console.log("Create Account Seanding Data >>> ", response.data.totalItems);

        if (response.data.error) {
          notify(response.data.error)

        } else {

          setLogin(true)
          setCustID(response.data.cust_id)
          setCustName(response.data.cust_name)
          notify(response.data.success)

          setTimeout(function () { navigate("/AllProducts"); getTotalCartItemsLogin(response.data.cust_id) }, 1000);
        }
      })
      .catch(function (err) { notify("Server is busy, Please try after some time...") })
  }


  const notify = (mess) => toast(mess);
  return (
    <>
      <div className="container-fluid Main">
        <div className="MainLogin">
          <h5>Login</h5>

          <hr />

          <form onSubmit={sendData}>
            <div className="InputFild">
              <div>
                <input requried
                  name="user_mobile"
                  type="number"
                  placeholder="Mobile"
                  onChange={(e) => {
                    setLoginInfo({ ...logininfo, mobile: e.target.value });
                  }}
                />
                {/* {logininfo.name} */}
              </div>
              <div>
                <input required
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setLoginInfo({ ...logininfo, password: e.target.value });
                  }}
                />
              </div>

              {/* {logininfo.password} */}

              <p className="F-pass">
                {/* <u>Forgot your password ? </u> */}
              </p>
            </div>
            <div className="Sign-btn">
              <input type="submit" value="Sign In" />

              <p className="Account">
                Don't have an account?
                <Link to="/Account">
                  <u className="mx-2">Create account</u>
                </Link>
              </p>
            </div>
          </form>
          <ToastContainer autoClose={1000} />
        </div>
      </div>
    </>
  );
}

export default Login;
