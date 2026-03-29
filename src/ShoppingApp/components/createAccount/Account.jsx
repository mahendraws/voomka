import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Account.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Account() {

  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    password: "",
  });

  const [error, setError] = useState("")

  function handelClickSendData(event) {
    event.preventDefault()
    axios
      .post("https://voomka.in/frontend/createcust.php", data)
      .then(function (response) {
        console.log("Create Account Seanding Data >>> ", response.data);

        if (response.data.error) {
          notify(response.data.error)

        } else {
          notify(response.data.success)
          setTimeout(function () { navigate("/Login") }, 2000);

        }

      })
      .catch(function (err) { setError("server is busy, Please try again...") })

  }


  const notify = (mess) => toast(mess);

  return (
    <>
      <div className="container-fluid MainAc">
        <div className="MainAccount">
          <h5>Create Account </h5>
          <form onSubmit={handelClickSendData}>
            <hr />
            <div className="InputFild02">
              <div>
                <input required
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={(e) => {
                    setData({ ...data, name: e.target.value });
                  }}
                />
              </div>
              <div>
                <input required
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                />
              </div>
              <div>
                <input required
                  type="text"
                  name="mobilenumber"
                  placeholder="Mobile Number"
                  onChange={(e) => {
                    setData({ ...data, mobilenumber: e.target.value });
                  }}
                />
              </div>
              <div>
                <input required
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="Create-Account-btn">
              <button type="submit" >Create Account </button>

              <p className="Account">
                Have an account?
                <Link to="/Login">
                  <u className="mx-2">Sign in</u>
                </Link>
              </p>
              <span>{error}</span>
              <ToastContainer autoClose={1000} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Account;
