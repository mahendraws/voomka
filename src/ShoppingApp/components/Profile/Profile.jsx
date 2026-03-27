import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { ShopContext } from "../../contexts/shopContextProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Profile() {
  const { custID } = useContext(ShopContext)

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    address1: "",
    address2: "",
    newpassword: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    cust_id: "",
    isUpdate: "",
  });

  const notify = (mess) => toast(mess);
  useEffect(() => {
    axios
      .post(
        "https://voomka.in/frontend/profile.php",
        { "cust_id": custID, "isUpdate": "0" }
      )
      .then(function (response) {
        setProfileData(response.data)
        console.log("from profile .... ", response.data);
        //navigate('/');
      });


  }, [])


  const profiledatasend = () => {
    // console.log("Profile data:", profileData);
    // alert(profileData.pincode);
    // setProfileData({...profileData,cust_id: custID,isUpdate:"1"})
    let c = profileData;
    c.isUpdate = "1";
    setProfileData(c)
    console.log("raw data  ", c)

    axios
      .post(
        "https://voomka.in/frontend/profile.php",
        profileData
      )
      .then(function (response) {
        console.log("from profile .... ", response.data);
        //navigate('/');
        notify(response.data.success)
      });
  };

  return (
    <>
      <div>
        <div className="container UserInfo">
          <div className="UserMain">
            <div className="Profile-heading">
              <h5 className="text-center"> User Profile </h5>
              <hr />
            </div>

            <div className="InputFilds">
              <div>
                <span>
                  Name :
                  <p>
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={(e) => {
                        setProfileData({
                          ...profileData,
                          name: e.target.value,
                        });
                      }}
                    />
                  </p>
                </span>
                <span>
                  Email :
                  <p>
                    <input
                      type="text"
                      name="email"
                      onChange={(e) => {
                        setProfileData({
                          ...profileData,
                          email: e.target.value,
                        });
                      }}
                      value={profileData.email}
                    />
                  </p>
                </span>
                <span>
                  Mobile Number :
                  <p>
                    <input
                      type="text"
                      name="mobilenumber"
                      onChange={(e) => {
                        setProfileData({
                          ...profileData,
                          mobilenumber: e.target.value,
                        });
                      }}
                      value={profileData.mobilenumber}
                    />
                  </p>
                </span>
                <span>
                  Address 1:
                  <p>
                    <input
                      type="text"
                      name="address1"
                      onChange={(e) => {
                        setProfileData({
                          ...profileData,
                          address1: e.target.value,
                        });
                      }}
                      value={profileData.address1}
                    />
                  </p>
                </span>
                <span>
                  Address 2 :
                  <p>
                    <input
                      type="text"
                      name="address2"
                      onChange={(e) => {
                        setProfileData({
                          ...profileData,
                          address2: e.target.value,
                        });
                      }}
                      value={profileData.address2}
                    />
                  </p>
                </span>
              </div>

              <div>
                <span>
                  Country :
                  <p>
                    <input
                      type="text"
                      name="country"
                      onChange={(e) => {
                        setProfileData({
                          ...profileData,
                          country: e.target.value,
                        });
                      }}
                      value={profileData.country}
                    />
                  </p>
                </span>
                <span className="">
                  New Password :
                  <p>
                    <input
                      type="text"
                      name="newpassword"
                      onChange={(e) => {
                        setProfileData({
                          ...profileData,
                          newpassword: e.target.value,
                        });
                      }}
                      value={profileData.newpassword}
                    />
                  </p>
                </span>

                <span>
                  State :
                  <p>
                    <input
                      type="text"
                      name="state"
                      onChange={(e) => {
                        setProfileData({
                          ...profileData,
                          state: e.target.value,
                        });
                      }}
                      value={profileData.state}
                    />
                  </p>
                </span>

                <span>
                  City :
                  <p>
                    <input
                      type="text"
                      name="city"
                      onChange={(e) => {
                        setProfileData({
                          ...profileData,
                          city: e.target.value,
                        });
                      }}
                      value={profileData.city}
                    />
                  </p>
                </span>
                <span>
                  Pin Code :
                  <p>
                    <input
                      type="text"
                      name="pincode"
                      onChange={(e) => {
                        setProfileData({
                          ...profileData,
                          pincode: e.target.value,
                        });
                      }}
                      value={profileData.pincode}
                    />
                  </p>
                </span>

                <div
                  className="mt-4 mb-4 update-btn"
                  style={{ textAlign: "end" }}
                >
                  <button onClick={profiledatasend}>Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default Profile;
