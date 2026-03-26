import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ShopContext } from "../../contexts/shopContextProvider";

import axios from "axios";
import ProductCard from "../AllProducts/ProductCard";
function BestSelling() {

    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const { allProducts, addToCart, isLogin } = useContext(ShopContext)
    const limit = 8;

    const buildUrl = (customOffset = 0) => {

        let url = `https://voomka.in/dashboard/api/products/productsrand.php?limit=${limit}&offset=${customOffset}`;
        return url;

    };


    const loadProducts = async (reset = false, customOffset = 0) => {




        let url = buildUrl(customOffset);

        //alert(url)
        try {

            const res = await axios.get(url);

            const newProducts = res.data.data;
            console.log(res.data.data)
            setProducts(res.data.data);




        } catch (error) {
            console.error(error);
        }


    };

    useEffect(() => {
        loadProducts(true);
    }, []);


    return (
        <div className="container " style={{ marginTop: "100px" }}>
            <h4 className="text-center">Best Selling Items</h4>

            <div className="row mt-5">

                {products.map(product => (

                    <ProductCard
                        key={product.product_id}
                        product={product}
                    />

                ))}

            </div>


        </div>
    )
}

export default BestSelling