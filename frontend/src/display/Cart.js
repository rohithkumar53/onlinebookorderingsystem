import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, deleteBookFromCart } from '../actions/cartAction';
import Paymentcheckout from '../components/Paymentcheckout';
export default function Cart() {
    const bookcart = useSelector(state => state.addToCartReducer);
    const { book } = bookcart;
    const dispatch = useDispatch();
    let totalsum = 0;
    book.forEach((i) => {
        totalsum = totalsum + (i.price * i.copies);
    });
    return (
        <div className='row '>
            <div className='col-md-7 mx-auto my-5'>
                <h1 className='m-3 text-center'>YOUR CART</h1>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Copies</th>
                            <th>Total Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {book.length && book.map((eachbook, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{eachbook.name}</td>
                                <td>{eachbook.price}</td>
                                <td>
                                    <select value={eachbook.copies} onChange={(event) => dispatch(addToCart(eachbook, Number(event.target.value)))}>
                                        {[...Array(eachbook.stock)].map((item, index) => {
                                            return <option key={index} value={index + 1}>{index + 1}</option>
                                        })}
                                    </select>
                                </td>
                                <td>{eachbook.copies * eachbook.price}</td>
                                <td><i className="fa-solid fa-trash-can" onClick={(e) => dispatch(deleteBookFromCart(eachbook))}></i></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <hr />
                <div>
                    <h3>Total Amount: {totalsum} ??</h3>
                </div>
                <hr />
                <Paymentcheckout  amttopay={totalsum}/>
                <hr/>
            </div>
        </div>
    )
}
