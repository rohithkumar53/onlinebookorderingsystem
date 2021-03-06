import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { userLogout } from '../actions/usersAction';
export default function Navbar() {
    const booksincart= useSelector(state => state.addToCartReducer);
    const activeUser = useSelector(state=> state.userLoginReducer.activeUser);
    const {book}= booksincart;
    const history= useHistory();
    const dispatch=useDispatch();

    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand" href="/">OnlineBookOrderingSystem</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fa-solid fa-bars text-white"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {activeUser ? (
                            <div className="dropdown">
                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              {activeUser.name}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {activeUser.adminrole && <a className="dropdown-item" href="/admin">Admin Panel</a>}
                              <a className="dropdown-item" href="/orders">Orders</a>
                              <a className="dropdown-item" href="/profile">Profile</a>
                              <a className="dropdown-item" onClick={()=> dispatch(userLogout())}>Sign out</a>
                            </div>
                          </div>
                        ) : (
                            <li className="nav-item">
                            <a className="nav-link" href="/login">SignIn</a>
                        </li>
                        )}
                        
                        <li className="nav-item">
                            <a className="nav-link" href="/cart"><i className="fas fa-shopping-cart"></i><span className='m-1'>{book.length}</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
