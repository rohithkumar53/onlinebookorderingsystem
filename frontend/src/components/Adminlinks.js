import React from 'react'
import { Link } from 'react-router-dom';

export default function Adminlinks() {
  return (
    <div>
        <h2>Admin Dashboard</h2>
    <div className='row'>
        
        <div className="col-md-9 mx-auto mt-3 bg-dark">
            
            <ul className='adminnavlinks d-flex justify-content-center py-2'>
                <li>
                    <Link to="/admin/customerslist" style={{color:"white"}}>Customers</Link>
                </li>
                <li>
                    <Link style={{color:"white"}} to="/admin/bookslist">Books</Link>
                </li>
                <li>
                    <Link style={{color:"white"}} to="/admin/addnewbook">Add New Book</Link>
                </li>
                <li>
                    <Link style={{color:"white"}} to="/admin/orderslist">Orders</Link>
                </li>
            </ul>
        </div>
    </div>
    </div>
  )
}
