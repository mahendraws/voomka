import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../contexts/shopContextProvider";
import "./CheckoutMain.css";
import axios from "axios";

function ShppingAddress() {
  const { custID, setCustDetails, custDetails } = useContext(ShopContext)
  const [isEdit, setEdit] = useState(true)
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


  useEffect(() => {


    axios
      .post(
        "http://localhost/voomka/frontend/profile.php",
        { "cust_id": custID, "isUpdate": "0" }
      )
      .then(function (response) {
        // setCustDetails(response.data)
        console.log("from checkout .... ", response.data);
        //navigate('/');
        setProfileData(response.data)
      });

  }, [])


  return (
    <>
      <div className="reviewFilds">
        <div className="mt-3 mb-3 MainHEadding">
          <h5>Shipping Address</h5>
          <button onClick={() => { setEdit(!isEdit) }}>Edit Address</button>
        </div>

        <div className="">

          <input disabled={isEdit}
            type="text"
            name="name"
            placeholder="FullName"
            value={profileData.name}
            onChange={(e) => {
              setProfileData({
                ...profileData,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div className="mt-3">

          <input disabled={isEdit} type="text" placeholder="Mobile" name="mobilenumber"
            onChange={(e) => {
              setProfileData({
                ...profileData,
                mobilenumber: e.target.value,
              });
            }}
            value={profileData.mobilenumber} />
        </div>

        <div className="mt-3">
          <input disabled={isEdit} type="text" placeholder="Email" name="email"
            onChange={(e) => {
              setProfileData({
                ...profileData,
                email: e.target.value,
              });
            }}
            value={profileData.email} />
        </div>

        <div className="mt-2">

          <input disabled={isEdit} type="text" placeholder="Address1" name="address1"
            onChange={(e) => {
              setProfileData({
                ...profileData,
                address1: e.target.value,
              });
            }}
            value={profileData.address1} />
        </div>

        <div className="mt-2">

          <input disabled={isEdit} type="text" placeholder="Address2" name="address2"
            onChange={(e) => {
              setProfileData({
                ...profileData,
                address2: e.target.value,
              });
            }}
            value={profileData.address2} />
        </div>
        <div className="mt-2">

          <input disabled={isEdit} type="text" placeholder="Country" name="country"
            onChange={(e) => {
              setProfileData({
                ...profileData,
                country: e.target.value,
              });
            }}
            value={profileData.country} />
        </div>
        <div className="mt-2">
          <input disabled={isEdit} type="text" placeholder="State" name="state"
            onChange={(e) => {
              setProfileData({
                ...profileData,
                state: e.target.value,
              });
            }}
            value={profileData.state} />
        </div>
        <div className="mt-2">
          <input disabled={isEdit} type="text" placeholder="City" name="city"
            onChange={(e) => {
              setProfileData({
                ...profileData,
                city: e.target.value,
              });
            }}
            value={profileData.city} />
        </div>

        <div className="mt-2">
          <input disabled={isEdit} type="text" placeholder="Pin Code" name="pincode"
            onChange={(e) => {
              setProfileData({
                ...profileData,
                pincode: e.target.value,
              });
            }}
            value={profileData.pincode} />
        </div>


      </div>
    </>
  );
}

export default ShppingAddress;
