import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderById } from '../actions/ordersAction';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function Orderdetails({ match }) {
    const id = match.params.orderid;
    const dispatch = useDispatch();
    const orderdetails = useSelector(state => state.orderByIdReducer);
    const { loading, order, error } = orderdetails;
    //console.log("orderzxx", order);

    useEffect(() => {
        dispatch(orderById(id));
    }, [dispatch])

    return (
        <div>
            {loading ? (<Loading />) : (error ? (<Error errmsg="Something went wrong with order details" />) : (order && (
                <div>
                    <div className='row'>
                        <div className='card col-md-5 mx-auto my-2'>
                            <h2>Order Information</h2>
                            <hr/>
                            <h1><b>Order ID:</b> {order._id}</h1>
                            <h1><b>Total Amount:</b> {order.orderbillamount}£</h1>
                            <h1><b>Transaction ID:</b> {order.transactionid}</h1>
                            <h1><b>Date:</b> {order.createdAt.substring(0,10)}</h1>
                            {order.delivered ? (<h1><b>Delivered</b></h1>): (<h1><b>Order Placed</b></h1>)}
                            <hr/>
                            <div>
                                <h2>Shipping Information</h2>
                                <hr/>
                                <h1><b>Address:</b> {order.shippingaddress.address}</h1>
                                <h1><b>City:</b> {order.shippingaddress.city}</h1>
                                <h1><b>Country:</b> {order.shippingaddress.country}</h1>
                                <h1><b>Post Code:</b> {order.shippingaddress.pincode}</h1>
                            </div>
                            
                            
                        </div>
                        <div className='card col-md-5 mx-auto my-2'>
                            <h2>Books Ordered</h2>
                            <hr/>
                            {order.orderedbooks.map((eachbook, i) => {
                                return <div key={i+1}>
                                    <h1><b>Name:</b> {eachbook.name}</h1>
                                    <h1><b>Copies:</b> {eachbook.copies}</h1>
                                    <h1><b>Price:</b> {eachbook.copies}*{eachbook.price} = {eachbook.copies * eachbook.price}</h1>
                                    <hr/>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            )))}
        </div>
    )
}
