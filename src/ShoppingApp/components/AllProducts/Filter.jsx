import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "rc-slider";

const Filter = ({ filters, setFilters, resetFilters }) => {

    const [categories, setCategories] = useState([]);

    const colors = [
        "red", "yellow", "blue", "green",
        "orange", "purple", "black", "white", "pink"
    ];

    const types = ["Casual", "Formal", "Sports"];
    const fabrics = ["Cotton", "Polyester", "Wool", "Silk"];

    // Load categories from database
    useEffect(() => {

        axios.get("https://voomka.in/dashboard/api/products/categories.php")
            .then(res => setCategories(res.data.data));

    }, []);

    // Auto apply filter on change
    const updateFilter = (key, value) => {

        setFilters(prev => ({
            ...prev,
            [key]: value
        }));

    };

    return (
        <div>

            <div className="d-flex justify-content-between align-items-center mb-3">

                <h5 className="mb-0">Filters</h5>

                <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={resetFilters}
                >
                    Reset
                </button>

            </div>

            {/* Category */}
            <div className="mb-4">

                <strong>Category</strong>

                {categories.map(cat => (

                    <div className="form-check" key={cat.category_id}>

                        <input
                            type="checkbox"
                            id={cat.category_name}
                            className="form-check-input"
                            checked={filters.category == cat.category_id}
                            onChange={(e) =>
                                setFilters(prev => ({
                                    ...prev,
                                    category: e.target.checked ? cat.category_id : ""
                                }))
                            }
                        />

                        <label for={cat.category_name} className="form-check-label">
                            {cat.category_name}
                        </label>

                    </div>

                ))}

            </div>

            {/* Price Slider */}
            <div className="mb-4">

                <strong>Price</strong>

                <Slider
                    range
                    min={0}
                    max={5000}
                    value={[
                        filters.min_price || 0,
                        filters.max_price || 5000
                    ]}
                    onChange={(value) =>
                        setFilters(prev => ({
                            ...prev,
                            min_price: value[0],
                            max_price: value[1]
                        }))
                    }
                />

                <div>
                    ₹{filters.min_price || 0} - ₹{filters.max_price || 5000}
                </div>

            </div>

            {/* Color circles */}
            <div className="mb-4">

                <strong>Color</strong>

                <div className="d-flex flex-wrap gap-2 mt-2">

                    {colors.map(color => (

                        <div
                            key={color}
                            onClick={() =>
                                setFilters(prev => ({
                                    ...prev,
                                    color: prev.color === color ? "" : color
                                }))
                            }
                            style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                backgroundColor: color,
                                cursor: "pointer",
                                border: filters.color === color
                                    ? "3px solid black"
                                    : "1px solid #ccc"
                            }}
                        />

                    ))}

                </div>

            </div>

            {/* Type checkbox */}
            <div className="mb-4">

                <strong>Type</strong>

                {types.map(type => (

                    <div key={type} className="form-check">

                        <input
                            type="checkbox"
                            id={type}
                            className="form-check-input"
                            checked={filters.type == type}
                            onChange={(e) =>
                                setFilters(prev => ({
                                    ...prev,
                                    type: e.target.checked ? type : ""
                                }))
                            }
                        />

                        <label for={type} className="form-check-label">
                            {type}
                        </label>

                    </div>

                ))}

            </div>

            {/* Fabric checkbox */}
            <div className="mb-4">

                <strong>Fabric</strong>

                {fabrics.map(fabric => (

                    <div key={fabric} className="form-check">

                        <input
                            type="checkbox"
                            id={fabric}
                            className="form-check-input"
                            checked={filters.fabric == fabric}
                            onChange={(e) =>
                                setFilters(prev => ({
                                    ...prev,
                                    fabric: e.target.checked ? fabric : ""
                                }))
                            }
                        />

                        <label for={fabric} className="form-check-label">
                            {fabric}
                        </label>

                    </div>

                ))}

            </div>

        </div>
    );

};

export default Filter;
