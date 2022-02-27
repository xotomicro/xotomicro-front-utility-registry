import React, {useEffect, useState} from "react";
import {OrderModel} from "../model/OrderModel";

function OrderApi({token}: any) {
    const [orders, setOrders]: any = useState(null);
    const [loading, setLoading]: any = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`http://${process.env.SERVICE_URL}:8080/orders`, {headers: {"Content-Type": "application/json", Authorization: token}})
            .then((response: Response) => response.json())
            .then(setOrders)
            .then(() => setLoading(false));
    }, [token]);

    if (loading) return <p>Loading...</p>;

    if (orders) {
        return (
            <div className="order">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order: OrderModel, index: React.Key | null | undefined) => (
                            <tr key={index}>
                                <td>{order.id}</td>
                                <td>{order.orderType}</td>
                                <td>{order.productName}</td>
                                <td>{order.productDescription}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return <p>Cannot load data</p>;
}

export default OrderApi;
