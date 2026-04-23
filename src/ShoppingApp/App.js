import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

import Navigation from "./components/navigation/Navigation";
import Home from "./components/Home/Home";
import Aboutus from "./components/Aboutus/Aboutus";
import ProductPage from "./components/Productpage/ProductPage";
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./components/Login/Login";
import Account from "./components/createAccount/Account";
import Profile from "./components/Profile/Profile";
import Addtocart from "./components/Addtocart/Addtocart";
import WriteReviews from "./components/Reviews/WriteReviews";
import Nopage from "./components/Nopage/Nopage";
import CheckoutMain from "./components/Checkout/CheckoutMain"
import MainThankyou from "./components/Thankyou/MainThankyou"
import Footter from './components/footter/Footter'
import RefundPolicy from './components/RefundPolicy/RefundPolicy'
import PrivacyPolicy from './components/privacy/PrivacyPolicy'
import Products from "./components/AllProducts/Products";
import ScrollToTop from "./ScrollToTop";
import MyOrders from "./components/orders/MyOrders";
import OrderDetails from "./components/orders/OrderDetails";
import Navbottom from "./components/navigation/Navbottom";
import Myaccount from "./components/myaccount/Myaccount";
import Termsandconditions from "./components/RefundPolicy/Termsandconditions";
import Contact from "./components/Aboutus/Contact";
function App({ Component, pageProps }) {







  return (
    <div>

      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home {...pageProps} />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/AllProducts" element={<Products />} />
          <Route path="/AllProducts/:id" element={<ProductPage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Addtocart" element={<Addtocart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Myaccount" element={<Myaccount />} />
          <Route path="/Checkout" element={<CheckoutMain />} />

          <Route path="/Thankyou" element={<MainThankyou />} />
          <Route path="/RefundPolicy" element={<RefundPolicy />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Termsandconditions" element={<Termsandconditions />} />
          <Route path="/ReturnPolicy" element={<RefundPolicy />} />
          <Route path="/WriteReviews" element={<WriteReviews />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/order-details/:order_id" element={<OrderDetails />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footter />
        <Navbottom />
      </BrowserRouter>

    </div>
  );
}

export default App;
