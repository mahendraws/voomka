import React from "react";
import "./style.css";
function ProductDetails({ ProductDescription, Ingredients, info1, info2 }) {
  return (
    <>
      <div>
        <div dangerouslySetInnerHTML={{ __html: ProductDescription }} style={{ width: "95%", wordWrap: "break-word" }}>


        </div>
      </div>
    </>
  );
}

export default ProductDetails;
