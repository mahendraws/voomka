import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import allProducts from "../assets/allProduct.js";
import axios from "axios";



export const ShopContext = createContext(null);

const getDefaultCart = () => {

}

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(0);
  const [isLogin, setLogin] = useState(false);
  const [custID, setCustID] = useState(0);
  const [cust_name, setCustName] = useState("");
  const [custDetails, setCustDetails] = useState([{}])
  const [productID, setProductID] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)
  const [cartProduct, setCartProduct] = useState([])
  const [filterreviews, setFilterreviews] = useState([]);

  useEffect(() => {

    getTotalCartAmount()
  }, [cartProduct])


  const getProductDetails = async (product_id) => {


    const res = await fetch(
      `https://voomka.in/dashboard/api/products/get.php?id=${product_id}`
    );

    const data = await res.json();

    const name = data.product.product_name;
    const price = data.product.price;
    const image = data.images[0]?.image_name;

    console.log("------------- ", name);

    return {
      title: name,
      amount: price,
      url: image
    };
  };



  const addToCart = (itemId, quantity) => {

    console.log("cart item : ", itemId, quantity, custID)


    axios
      .post("https://voomka.in/frontend/addtocart.php", { "itemId": itemId, "quantity": quantity, "custID": custID })
      .then(function (response) {
        console.log("cart added >>> ", response.data);

        if (response.data.error) {


        } else {

          //setCartItems(response.data.totalItems)
          getTotalCartItems()
          //alert("Product Added");
          console.log("cart items ", cartItems)
          // setTimeout(function(){navigate("/AllProducts")},1000);

        }

      })
      .catch(function (err) { console.log("Server is busy, Please try after some time...") })


  }

  const removeFromCart = (itemId) => {
    setCartProduct([]);
    setTotalPrice(0)
    axios
      .delete("https://voomka.in/frontend/getcarts.php", { data: { "cust_id": custID } })
      .then(function (response) {
        // getProdData(response)
      })

  }
  const deleteCartItem = (num) => {

    console.log("delete order id ", num)

    const fc = cartProduct.filter((val, index) => val.order_id !== num)
    console.log("after delete ", fc)
    setCartProduct(fc)

    axios
      .delete("https://voomka.in/frontend/getcarts.php", { data: { "order_id": num } })
      .then(function (response) {
        // getProdData(response)
      })

  }


  const getTotalCartAmount = () => {

    let total = 0;

    console.log("cart amount ", cartProduct)
    cartProduct.forEach((item) => {
      console.log(item.title, (item.amount * item.quantity))
      total += (Number(item.quantity) * Number(item.amount))
    })
    setTotalPrice(total)
  }

  const getTotalCartItemsLogin = (id) => {

    axios
      .post("https://voomka.in/frontend/getcarts.php", { "cust_id": id })
      .then(function (response) {
        getProdData(response)
      })

  }


  const getTotalCartItems = () => {

    axios
      .post("https://voomka.in/frontend/getcarts.php", { "cust_id": custID })
      .then(function (response) {

        getProdData(response)



      })

  }


  const getProdData = async (response) => {

    const promises = response.data.map(async (element) => {

      const obj2 = await getProductDetails(element.product_id);

      const obj1 = {
        quantity: Number(element.quantity),
        product_id: element.product_id,
        order_id: element.order_id
      };

      return { ...obj1, ...obj2 };
    });

    const alld = await Promise.all(promises);

    console.log("All cart products:", alld);

    setCartProduct(alld);
  };


  const updateQuantity = (no, id) => {


    // 1. Find the todo with the provided id
    const currentTodoIndex = cartProduct.findIndex((item) => item.order_id === id);
    // 2. Mark the todo as complete
    let cq = cartProduct[currentTodoIndex].quantity

    let updatedTodo = { ...cartProduct[currentTodoIndex], quantity: cq };;
    if (no) {
      if (cq > 1) {

        updatedTodo = { ...cartProduct[currentTodoIndex], quantity: cq - 1 };
      }

    } else {
      updatedTodo = { ...cartProduct[currentTodoIndex], quantity: cq + 1 };
    }


    const newTodos = [...cartProduct];
    console.log("updated todo ", updatedTodo)
    newTodos[currentTodoIndex] = updatedTodo;
    setCartProduct(newTodos);

  }

  const contextValue = { filterreviews, setFilterreviews, removeFromCart, custDetails, setCustDetails, cust_name, setCustName, updateQuantity, getTotalCartItemsLogin, cartProduct, setCartProduct, setTotalPrice, totalPrice, getProductDetails, setCartItems, custID, setCustID, productID, setProductID, setLogin, isLogin, getTotalCartItems, getTotalCartAmount, allProducts, cartItems, addToCart, deleteCartItem };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;