import React, { useEffect, useState } from 'react';
import './Order.css';

import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import axios from 'axios';
const Orders = ({ url }) => {

    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {

        const response = await axios.get(url+"/api/order/list");
        if (response.data.success) {
            setOrders(response.data.data);
            console.log(response.data);
        }

        else {
            toast.error('Error')
        }

    }

    const statusHandler = async (event, orderId) => {
        console.log(event, orderId)
        try {
            const response = await axios.post(url + "/api/order/status", {
                orderId,
                status:event.target.value,

            });

            if (response.data.success) {
                await fetchOrders(); // Re-fetch orders to update the UI after status change
            } else {
                toast.error('Failed to update status');
            }
        } catch (error) {
            toast.error('Error updating status');
            console.error("Status update error: ", error);
        }


    }



    useEffect(() => {
        fetchOrders();
    },[]);



    return (
        <>
            <div className="order-add">
                <h3>Order Page</h3>

                <div className="order-list">
                    {orders.map((order, index) => (
                        <div key={index} className="order-item">
                            <img src={assets.parcel_icon} alt="Parcel Icon" />
                            <div>
                                <p className="order-item-food">
                                    {order.items.map((item, idx) => {
                                        const isLastItem = idx === order.items.length - 1;
                                        return (
                                            <span key={idx}>
                                                {item.name} x {item.quantity}
                                                {!isLastItem && ', '}
                                            </span>
                                        );
                                    })}
                                </p>
                                <p className='order-item-name'>
                                    {order.address.firstName + '' + order.address.lastName}
                                    <div className="item address">
                                        <p>{order.address.street + ','}</p>
                                        <p>{order.address.city + ',' + order.address.state + ',' + order.address.country + ' ,' + order.address.zipcode}</p>
                                    </div>
                                </p>
                                <p className='order-item-phone'> {order.address.phone}</p>


                            </div>
                            <p>Items :{order.items.length}</p>
                            <p>${order.amount}</p>
                            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
                                <option value="Food Processing">Food Processing</option>
                                <option value="Out For delivery">Out For delivery</option>
                                <option value="Deliverd">Deliverd</option>
                            </select>

                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Orders