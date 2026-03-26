import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

const Products = () => {

    const [products, setProducts] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const [filters, setFilters] = useState({
        category: "",
        min_price: "",
        max_price: "",
        color: "",
        type: "",
        fabric: ""
    });


    const limit = 12;

    const buildUrl = (customOffset = offset) => {

        let url = `https://voomka.in/dashboard/api/products/products.php?limit=${limit}&offset=${customOffset}`;

        Object.keys(filters).forEach(key => {

            if (filters[key] !== "") {
                url += `&${key}=${filters[key]}`;
            }

        });

        return url;

    };



    const loadProducts = async (reset = false, customOffset = offset) => {

        if (!reset) {

            if (loading || !hasMore) return;

        }

        setLoading(true);

        let url = buildUrl(customOffset);

        //alert(url)
        try {

            const res = await axios.get(url);

            const newProducts = res.data.data;


            // alert("ddd")
            if (reset) {
                setProducts(res.data.data);
                setOffset(limit);
            } else {
                setProducts(prev => [...prev, ...res.data.data]);
                setOffset(prev => prev + limit);
            }



        } catch (error) {
            console.error(error);
        }

        setLoading(false);
    };

    useEffect(() => {
        loadProducts(true);
    }, []);

    useEffect(() => {

        const handleScroll = () => {

            if (
                window.innerHeight + document.documentElement.scrollTop
                >= document.documentElement.offsetHeight - 100
            ) {
                loadProducts();
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, [offset, loading, hasMore]);


    useEffect(() => {

        setProducts([]);
        setOffset(0);
        setHasMore(true);

        loadProducts(true, 0);

    }, [filters]);



    const resetFilters = () => {

        const defaultFilters = {
            category: "",
            min_price: "",
            max_price: "",
            color: "",
            type: "",
            fabric: ""
        };

        setProducts([]);
        setOffset(0);
        setHasMore(true);
        setFilters(defaultFilters);

    };



    return (


        <div className="container-fluid mt-5 p-4">

            {/* Mobile Filter Button */}
            <button
                className="btn btn-primary d-md-none mb-3"
                data-bs-toggle="offcanvas"
                data-bs-target="#filterCanvas"
            >
                Filters
            </button>

            <div className="row">


                {/* Desktop Filter */}
                <div className="col-md-3 d-none d-md-block">

                    <Filter
                        filters={filters}
                        setFilters={setFilters}
                        resetFilters={resetFilters}
                    />

                </div>

                {/* Products */}
                <div className="col-md-9">

                    <h4 className="m-4">Our Latest Collections</h4>
                    <div className="row">

                        {products.map(product => (

                            <ProductCard
                                key={product.product_id}
                                product={product}
                            />

                        ))}

                    </div>

                    {loading && (
                        <div className="text-center my-4">
                            <div className="spinner-border text-primary"></div>
                        </div>
                    )}

                    {!hasMore && (
                        <div className="text-center my-4 text-muted">
                            No more products
                        </div>
                    )}



                </div>

            </div>

            {/* Mobile Offcanvas Filter */}
            <div
                className="offcanvas offcanvas-start"
                id="filterCanvas"
            >

                <div className="offcanvas-header">
                    <h5>Filters</h5>

                    <button
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                    ></button>

                </div>

                <div className="offcanvas-body">

                    <Filter
                        filters={filters}
                        setFilters={setFilters}
                        resetFilters={resetFilters}
                    />

                </div>

            </div>

        </div>


    );

};

export default Products;
