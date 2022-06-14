import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordersByCustomerId } from '../actions/ordersAction';
import Loading from '../components/Loading';
import Error from '../components/Error';
export default function Orders() {
    const dispatch = useDispatch();
    const allordersdetails = useSelector(state => state.ordersByCustomerIdReducer);
    let { orders, error, loading } = allordersdetails;

    useEffect(() => {
        if (localStorage.getItem("activeUser")) {
            const customerid = JSON.parse(localStorage.getItem("activeUser"));
            dispatch(ordersByCustomerId(customerid._id));
        }
        else {
            window.location.href = "/login";
        }
    }, [dispatch])

    return (
        <div className='row '>
            <div className='col-md-9 mx-auto my-5'>
                <h3 className='m-3 text-center'>YOUR ORDERS</h3>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>ORDER ID</th>
                            <th>Date</th>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && (<Loading />)}
                        {error && (<Error errmsg="Something went wrong!!" />)}
                        {orders && (orders.map((eachorder, index) => {
                            return <tr key={index} onClick={()=> window.location=`/orderdetails/${eachorder._id}`}>
                                <td>{index + 1}</td>
                                <td>{eachorder._id}</td>
                                <td>{eachorder.createdAt.substring(0, 10)}</td>
                                <td>{eachorder.transactionid}</td>
                                <td>{eachorder.orderbillamount}£</td>
                                <td>{eachorder.delivered ? (<span>Delivered</span>) : (<span>Order Placed</span>)}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
