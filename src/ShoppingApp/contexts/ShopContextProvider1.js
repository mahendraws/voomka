import React, { createContext, useState } from "react";
import all_product from "../data.json";

export const ShopContext =  createContext(null);

const getDefaultCart = ()=>{

}

const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());
    const [isLogin,setLogin] = useState(false);
    
    const addToCart = (itemId) =>{
       
    }

    const removeFromCart = (itemId) =>{
        
    }
    
    const getTotalCartAmount = () => {
     
        
      }

      const getTotalCartItems = () =>{
   
      }

    const contextValue = {setLogin,isLogin,getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;