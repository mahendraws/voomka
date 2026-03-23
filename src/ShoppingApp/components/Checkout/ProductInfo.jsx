import React,{useContext} from "react";
import ProductDetails from "./ProductDetails";
import { ShopContext } from "../../contexts/shopContextProvider";
function ProductInfo() {
  const {cartProduct,totalPrice} = useContext(ShopContext)

  return (
    <>
      <div className="reviewFilds">
        <div className="mt-3 mb-3 InfoHeading">
          <h5>Product Information</h5>
        </div>

        <div>

          {cartProduct.map((item,index)=>{
              return (
                <>
                   <ProductDetails
            imgurl={item.url}
            title={item.title}
            price={item.amount}
            quantity={item.quantity}
            
          />
                </>
              )

          })}
       
        </div>
        <div className="total">
          Total Amount: {totalPrice}
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
