import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../contexts/shopContextProvider";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const { isLogin, custID, cust_name } = useContext(ShopContext);
    useEffect(() => {
        fetch(`https://voomka.in/frontend/orders/getMyOrders.php?cust_id=${custID}&page=${page}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [page, custID]);

    return (
        <div className="container mt-4">
            <h3>My Orders</h3>

            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((item, index) => (
                        <tr key={index}>
                            <td>{item.order_id}</td>
                            <td>{item.created_at}</td>
                            <td>₹ {item.total_amount}</td>
                            <td>{item.status}</td>
                            <td>
                                <Link
                                    to={`/order-details/${item.order_id}`}
                                    className="btn btn-primary btn-sm"
                                >
                                    Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="d-flex justify-content-between m-4">
                <button
                    className="btn btn-secondary"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </button>

                <button
                    className="btn btn-secondary"
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default MyOrders;