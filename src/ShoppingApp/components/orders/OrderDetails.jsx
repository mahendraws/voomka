import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetails = () => {
    const { order_id } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://voomka.in/frontend/orders/getOrderDetails.php?order_id=${order_id}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [order_id]);

    return (
        <div className="container mt-4">
            <h4>Order Details</h4>
            <h6>Order ID: {order_id}</h6>


            {items.map((item, index) => (
                <div key={index} className="row mb-3 p-3 bg-light">

                    <div className="col-md-4">
                        <img
                            src={`https://voomka.in/dashboard/api/uploads/${item.image_name}`}
                            className="card-img-top"
                            alt=""
                            style={{ height: "100px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-4">
                        <h5>{item.product_name}</h5>
                        <p>Price: ₹ {item.price}</p>

                    </div>

                    <div className="col-md-4">
                        <p>Quantity: {item.quantity}</p>
                        <p>Total: ₹ {item.price * item.quantity}</p>
                    </div>




                </div>
            ))}



            <Link to="/AllProducts" className="btn btn-dark text-white m-4">Continue Shopping</Link>
        </div>
    );
};

export default OrderDetails;