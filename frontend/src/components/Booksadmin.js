import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loading'
import Error from './Error'
import { getAllBooksAction, deleteSpecificBook } from '../actions/booksAction'
export default function Booksadmin() {
  const dispatch = useDispatch();
  const allbooks = useSelector(state => state.getAllBooksReducer);
  const { loading, error, books } = allbooks;
  useEffect(() => {
    dispatch(getAllBooksAction());
  }, [])

  return (
    <div className='row '>
      <div className='col-md-7 mx-auto my-5'>
        <h2 className='m-3 text-center'>Books List</h2>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Book ID</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {loading ? (<Loading />) : (error ? (<Error errmsg="Something went wrong!!!" />) : books && books.map((eachbook,index) => {
              return <tr key={index}>
                <td>{eachbook.name}</td>
                <td>{eachbook.stock}</td>
                <td>{eachbook.price}</td>
                <td>{eachbook._id}</td>
                <td><Link to={`/admin/editbook/${eachbook._id}`}><i className="fas fa-edit text-dark"></i></Link></td>
                <td><i className="fa-solid fa-trash-can" onClick={(e)=> {dispatch(deleteSpecificBook(eachbook._id))}}></i></td>
              </tr>
            }))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
