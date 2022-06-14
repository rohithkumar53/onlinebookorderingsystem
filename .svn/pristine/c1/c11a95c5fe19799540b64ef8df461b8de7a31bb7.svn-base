import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificBookByIdAction } from '../actions/booksAction';
import { addToCart } from '../actions/cartAction';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Review from '../components/Review';
export default function Description({ match }) {
  const bookid = match.params.id;

  const dispatch = useDispatch();
  //for the number of book copies selected 
  const [bookCopies, setBookCopies]= useState(1);

  const getbookstate = useSelector(state => state.getBookByIdReducer);
  const { book, loading, error } = getbookstate;

  useEffect(() => {
    dispatch(getSpecificBookByIdAction(bookid));
  }, [])

  //function to dispatch the book to cart with its quantity
  const Cart= ()=>{
    dispatch(addToCart(book, bookCopies));
  }

  return (
    <div>
      {loading ? (<Loading/>) : error ? (<Error errmsg="Something went wrong!!"/>) : (
        <div className='row'>
          <div className='col-md-6'>
            <div className='card m-2 p-5 rounded shadow bg-white'>
              <h2>{book.name}</h2>
              <img src={book.image} alt="" className='img-fluid mx-5 my-2 w-75 imgdesc' />
              <p>{book.description}</p>
            </div>
          </div>

          <div className='col-md-6'>
            <div className="m-2 bookdesc">
              <h1>Price : {book.price}</h1>
              <hr />
              <h1>Select Quantity</h1>
              <select value={bookCopies} onChange={(e)=> setBookCopies(Number(e.target.value))}>
                {[...Array(book.stock)].map((item, index) => {
                  return <option key={index} value={index + 1}>{index + 1}</option>
                })}
              </select>
              <hr />
              {book.stock > 0 ? (<button className='btn btn-primary' onClick={Cart}>Add to Cart</button>) : (<button className='btn btn-primary disabled' >Add to Cart</button>)}
              
              <hr />
              <Review book={book}/>
              <hr/>
            </div>
            
          </div>
        </div>
      )}
    </div>

  )
}
