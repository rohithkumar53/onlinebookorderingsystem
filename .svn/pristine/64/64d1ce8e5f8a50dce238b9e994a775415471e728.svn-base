import React from 'react'
import { useDispatch , useSelector} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { orderPayment } from '../actions/ordersAction';
import Error from "./Error";
import Success from "./Success";
import Loading from "./Loading";
//import {useHistory} from 'react-router-dom';

export default function Paymentcheckout({amttopay}) {
    const dispatch=useDispatch();
    //const history= useHistory();
    const orderstatus= useSelector(state => state.orderPaymentReducer);
    const user = useSelector(state => state.userLoginReducer);
    const { activeUser } = user;
    const {success, error, loading}= orderstatus;
    const handleClick=()=> {
        if(!activeUser){
            //history.push("/login");
            window.location.href="/login";
        }
    }
    const handleToken=(token)=>{
        dispatch(orderPayment(token, amttopay));
        console.log(token);
    }
    return (
        <div>
            {loading && (<Loading/>)}
            {success && (<Success msg="Payment accepted and Order has been placed successfully!!!"/>)}
            {error && (<Error errmsg="Payment canceled, Something went wrong!!"/>)}
            <StripeCheckout token={handleToken} amount={amttopay*100} currency="GBP" shippingAddress stripeKey={process.env.REACT_APP_PUBLISHKEY}>
                <div>
                    <button className='btn btn-dark' onClick={handleClick}>Make Payment</button>
                </div>
            </StripeCheckout>
        </div>
    )
}
