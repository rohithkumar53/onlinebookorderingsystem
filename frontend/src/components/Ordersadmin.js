import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loading';
import Error from './Error';
import { allOrdersAction } from '../actions/ordersAction';
export default function Ordersadmin() {
  const dispatch= useDispatch();
  const allordersstate= useSelector(state=> state.allOrdersReducer);
  const {loading, orders, error}= allordersstate;
  useEffect(() => {
    dispatch(allOrdersAction());
  }, [])
  
  return (
    <div className='row '>
      <div className='col-md-9 mx-auto my-3'>
        <h2 className='m-3 text-center'>ORDERS LIST</h2>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Date</th>
              <th>Order ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Transaction ID</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (<Loading />) : (error ? (<Error errmsg="Orders not fetched, Something went wrong!!!" />) : orders && orders.map((eachorder,index) => {
              return <tr key={index} onClick={(e)=> {window.location.href=`/orderdetails/${eachorder._id}`}}>
                <td>{eachorder.createdAt.substring(0,10)}</td>
                <td>{eachorder._id}</td>
                <td>{eachorder.name}</td>
                <td>{eachorder.email}</td>
                <td>{eachorder.transactionid}</td>
                <td>{eachorder.orderbillamount}£</td>
              </tr>
            }))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
